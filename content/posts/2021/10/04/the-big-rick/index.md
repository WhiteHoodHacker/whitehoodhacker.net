---
title: "IoT Hacking and Rickrolling My High School District"
date: "2021-10-04T15:00:00.000Z"
description: "This is the story of how I created a botnet of IPTVs to rickroll 10,000+ students for my senior prank."
author: "WhiteHoodHacker"
slug: "posts/2021-10-04-the-big-rick"
image: "https://raw.githubusercontent.com/WhiteHoodHacker/whitehoodhacker.net/main/content/posts/2021/10/04/the-big-rick/eghs.jpg"
---
import { Tweet } from "react-twitter-widgets"
import { Link } from "gatsby"

<figure>
    <img alt="Rickroll at Elk Grove High School" src="./eghs.jpg" />
    <figcaption>
        One of the hijacked displays at Elk Grove High School. Image by Tom Tran.
    </figcaption>
</figure>

On April 30th, 2021, I rickrolled my high school district. Not just my school but the entirety of Township High School District 214. It is one of the largest high school district in Illinois, consisting of 6 different schools with over 11,000 enrolled students.

This story isn't one of those typical rickrolls where students sneak Rick Astley into presentations, talent shows, or Zoom calls. I did it by hijacking every networked display in every school to broadcast "Never Gonna Give You Up" in perfect synchronization. Whether it was a TV in a hall, a projector in a classroom, or a jumbotron displaying the lunch menu, as long as it was networked, I hacked it!

In this post, I'll be explaining how I did it and how I evaded detection, as well as the aftermath when I revealed myself and didn't get into trouble.

## Disclaimer

> This post is for educational purposes only. Do not perform similar activities without explicit permission.

We prepared complete documentation of everything we did, including recommendations to remediate the vulnerabilities we discovered. We sent a comprehensive 26-page penetration test report to the D214 tech team and worked with them to help secure their network.

With that said, what we did was very illegal, and other administrations may have pressed charges. We are grateful that the D214 administration was so understanding.

## The Big Rick

To get started here's some footage of the whole thing :)

<iframe width="350" height="300" allow="fullscreen; picture-in-picture;" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/2ddFrmOcT50" />

## Initial Access

This story starts with my freshman year when I did not have much technical discipline -- a time that I can only describe as the beginning of my script kiddie phase. I didn't understand basic ethics or responsible disclosure and jumped at every opportunity to break something.

So obviously, I became curious about the technology at my high school. And by "curious," I mean port scanning the entire IP range of the internal district network.

I had a few friends help out with this project -- and oh boy, did we scan! Our scanning generated so much traffic that our school's technology supervisor caught wind of it and came in at one point to ask us to stop. Of course, we did so immediately, but by then, we had finished scanning the first half of the district's 10.0.0.0/8 address space -- a total of 8,388,606 IPs!

From the results, we found various devices exposed on the district network. These included printers, IP phones... and even security cameras without any password authentication!

<figure>
    <img alt="Security camera screenshot" src="./camera.jpg" />
    <figcaption>
        My 14-year-old self stares at the camera I remotely accessed from my iPad.
    </figcaption>
</figure>

> This is where I state the disclaimer again: never access other systems in an unauthorized manner without permission.

The district tech team was informed about the issue, which they resolved by placing the cameras behind ACL restrictions. However, many devices remained exposed to the student network -- more importantly for this post, the IPTV system!

### Exterity IPTV System

Before moving on, I will briefly explain the IPTV system. The system is composed of three products:
- AvediaPlayer (receivers)
- AvediaStream (encoders)
- AvediaServer (management)

AvediaPlayers are small blue boxes that connect to projectors and TVs. They can send serial commands to their respective device to turn the display on/off, change inputs/volume, switch channels, etc. These receivers include both a web interface and an SSH server to execute the serial commands. Additionally, they run embedded Linux with BusyBox tools and use some obscure CPU architecture designed for IoT devices called ARC (Argonaut RISC Core).

<figure>
    <img alt="AvediaPlayer r9300" src="./receiver.jpg" />
    <figcaption>
        An AvediaPlayer r9300 receiver which connects to displays. Image by Exterity.
    </figcaption>
</figure>

Next, AvediaStream encoders connect to devices that broadcast live video. They encode the live feed coming from these devices to the AvediaPlayer receivers, which display the stream. Encoders are attached to computers that need to broadcast a stream, such as text carousels or morning announcements. These also have embedded software similar to the AvediaPlayers.

Last but not least, AvediaServers allow administrators to control all receivers and encoders at once. These have typical x86_64 processors and run the enterprise Linux distribution, CentOS. Like the receivers and encoders, they also have web interfaces and SSH servers.

Since freshman year, I had complete access to the IPTV system. I only messed around with it a few times and had plans for a senior prank, but it moved to the back of my mind and eventually went forgotten.

## Preparation

Fast forward to the second semester of senior year, early 2021: all the schools were doing hybrid instruction because of the COVID-19 pandemic. Up to this point, in-person instruction was opt-in, with most students staying remote, including myself. But in March, the superintendent announced that in-person instruction would switch to an opt-out model on April 5th.

Since almost all students would be back in school, I realized that a senior prank involving the IPTV system was now worthwhile. A few days later, I decided to share my thoughts with a few close friends.

<figure>
    <img alt="Discord message" src="./message.jpg" />
    <figcaption>
        Top 10 pictures taken before disaster.
    </figcaption>
</figure>

I gathered a small team across the district and started preparing. We began to refer to the operation as "the Big Rick."

### 1. C2 Payload and Exploitation

The first thing we focused on was figuring out how to control all the projectors at once. While we could send commands to each receiver using a web interface, it would not be ideal spamming HTTP traffic to every receiver simultaneously.

Instead, I used the SSH access on each receiver as the command-and-control (C2) channel. I developed a simple shell script that would serve as a staged payload to be uploaded to each receiver ahead of time. This script contained various functions that could execute requests to the web interface locally on the receiver. Thanks to the increased flexibility from the payload, I could also back up and restore receiver settings to the filesystem after the rickroll was over.

```shell
#!/bin/sh

# get IP address of receiver's main interface for use in HTTP requests to self
# web server is not bound to localhost, so this IP has to be used
ip_address=$(/sbin/ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{print $2}' | cut -f2 -d:)

# POST helper function
sendRequest() {
    content=$1
    length=${#content}
    header="POST /cgi-bin/json_xfer HTTP/1.1\r\nHost: $ip_address\r\nContent-Type: application/json\r\nContent-Length: $length\r\nAuthorization: Basic bnVueWE6YnVzaW5lc3M=\r\n\r\n"
    echo -e "${header}" "${content}" | nc "$ip_address" 80
}

# JSON POST data to send "power on" serial command
jsonSerialPowerOn='{"params":{"TVCtrlType":"serial","serialPort":"Serial","standbyActions":"tv_off","unstandbyActions":"tv_on","ToggleDelay":"0","serialActions":"tv_on"},"action":"apply_send"}'
# ... more JSON data payloads

# sample macro function to loop request for three minutes
exampleMacro() {
    secs=180
    endTime=$(( $(date +%s) + secs ))
    while [ $(date +%s) -lt $endTime ]; do
        sendRequest "$jsonSerialPowerOn"
        sleep 10
    done
}

# delete script from filesystem
selfDestruct() {
    rm -- "$0"
}

# ./b1gr1ck.sh 1
if [ "$1" -eq "1" ]; then
    exampleMacro
# ./b1gr1ck.sh 2
elif [ "$1" -eq "2" ]; then
    selfDestruct
```
<figure>
    <figcaption>
        This is a sample version of the C2 payload.
    </figcaption>
</figure>

In the actual payload, I repeatedly looped commands to keep the rickroll running. For example, every 10 seconds, the display would power on and set the maximum volume. This way, if someone attempted to power off the projector or mute it, it would revert and continue playing. The only way to shut it off would be to pull the plug or change the input source. (Looping input changes causes flashes even if the current source is the same as the latest source. I had to rely on a failsafe input switch that activated right before the rickroll started to ensure everyone was tuned in. You can see this flash in the video at the 48-second countdown.)

The vulnerabilities exploited to gain initial access were implementation-specific (meaning D214 was at fault for using default passwords). However, I discovered vendor privilege escalation vulnerabilities in all of Exterity's IPTV products, allowing me to gain root access across all systems. One of these bugs was a simple GTFO-bin, but the other two are novel vulnerabilities that I cannot (and should not) publish.

### 2. RTP Multicast Stream

The next issue we tackled was setting up a custom video stream to play the rickroll in real-time. We needed to broadcast multicast traffic, but only the AvediaStream encoders or the AvediaServers could do this because of ACL restrictions.

Setting up the stream was arguably the most time-consuming part of preparation because testing was an absolute pain. I only needed a single projector for development, but it's not easy when classes are using them during the day.

So I tested at night instead! I would remotely connect to one of the PCs in the computer lab with the front camera facing the projector. Then, I would record a video to test if the projector displayed the stream correctly!

<iframe width="640" height="360" allow="fullscreen; picture-in-picture;" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/tguXIugaFz8" />

<figure>
    <figcaption>
        I used a loop of the DVD bouncing logo to test stream quality.
    </figcaption>
</figure>

The lag you see in the video is one of the earlier issues I faced with the stream. It turned out trying to redirect UDP traffic through the AvediaStream encoders added too much latency. I fixed this by broadcasting to multicast directly from an AvediaServer using `ffmpeg`.

Hopefully, I didn't scare any late-night staff!

### 3. An Unexpected Development

It was April 27th, a mere three days away from the Big Rick finale, when one of my peers discovered a new IP range full of IoT devices after a scan. It turns out it was the recently installed bell system, called Education Paging and Intercom Communications (EPIC). The majority of the devices in this range were speakers found in hallways, classrooms, etc.

Similar to how AvediaPlayers linked to AvediaServers, each speaker connected to an EPIC server for their respective school. These servers had a web interface locked behind a login page.

Only a *single* EPIC server had default credentials configured. We were able to modify the bell schedule at will, as well as upload custom audio tones. We could change the bells to play "Never Gonna Give You Up" instead!

<figure>
    <img alt="EPIC system screenshot 1" src="./epic-1.png" />
    <figcaption>
        Admin access to the bell system!
    </figcaption>
</figure>

However, we only had access to this individual school's EPIC system since it was the only one with vulnerable credentials. Or was it?

I discovered that the EPIC server we compromised performed weekly backups of its configuration to an external SMB file share. The credentials for this SMB server were the same default credentials for the EPIC system. Each backup included an SQL dump of account usernames and password hashes.

Well, what if the other EPIC systems have backup servers as well? And since these backup servers are separate from the EPIC servers, they might still use default credentials!

This scenario was precisely the case! From there, I was able to access the password hashes for the other EPIC servers and identify a local admin account available across all the EPIC servers. After some password cracking, we effectively had control over all the bell schedules in the district!

## Execution

One of our top priorities was to avoid disrupting classes, meaning we could only pull off the prank before school started, during passing periods, or after school. Before the pandemic, some schools would start earlier, some would start later, some had block scheduling, and some would have all their periods in one day. Conveniently due to COVID-19, all the high schools in the district were now on the same block schedule, so we didn't have to worry about scheduling on a per-school basis.

Another thing was that final exams were right around the corner. The biggest concern was standardized testing, which wouldn't have breaks during passing periods. We decided on April 30th, which was the Friday before AP exams started. We surveyed extensively to check if any significant tests were happening on this day. **We were fully prepared to abort if we learned any standardized testing was taking place.**

In the weeks before the Big Rick, we staged the C2 payload on all the AvediaPlayers in an automated manner, carefully spreading our actions to avoid detection. On the day of the Big Rick, we used two of the seven AvediaServers as the C2 masters, which would connect to all the AvediaPlayers and execute the payloads.

Below is the timeline of events on April 30th:

Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Event
--- | ---
10:40 AM |  Rickroll stream goes live with a 20-minute countdown.
10:55 AM | AvediaPlayer systems are initialized, turning on displays and changing the active channel to the rickroll stream.
11:00 AM | The stream finishes the countdown with the rickroll playing at the end of the first block.
11:10 AM | The payload restores the AvediaPlayer systems to their previous state and removes itself.
2:05 PM | The end of the third block bell plays a rickroll instead of the dismissal bell.
2:15 PM | The penetration test report is automatically sent to the technical supervisors.

We also scheduled another modified bell for 3:25 PM. If district tech still hadn't figured out what had happened to revert the bells, a 1-minute version of the 3-second dismissal bell would play at the end of the day.

They did figure it out, though, so I've included the audio file here for your enjoyment:

<center>
    <audio controls>
        <source src="./Carehawk1m.wav" type="audio/wav" />
        Your browser does not support the audio tag.
    </audio>
</center>

## The Aftermath

A few days after sending the report through the anonymous email account, we received an email response from D214's Director of Technology. The director stated that because of our guidelines and documentation, the district would not be pursuing discipline. In fact, he thanked us for our findings and wanted us to present a debrief to the tech team! Later, he revealed the superintendents themselves reviewed and were impressed by our report! 😯

I was ecstatic that the administration was open to remediating their problems and auditing them with us. Although the D214 administration communicated good intentions (and they did hold in the future), my peers did not trust the administration and were skeptical of the true nature of the meeting -- one of them referred to the whole thing as a sting operation!

We decided I would reveal myself to present our debrief slides with the others remaining anonymous in the Zoom meeting. I had planned on announcing my involvement from the beginning since I wanted to publish this blog post. (I was also pretty much the prime suspect anyways.) But, just in case, I scheduled the debrief to take place *after* I graduated.

<figure>
    <img alt="Big Rick debrief whoami slide" src="./whoami.jpg" />
    <figcaption>
        Yes, this was an actual slide from our debrief. Don't @ me.
    </figcaption>
</figure>

In all seriousness, the debrief went extremely well and was productive for everyone. We answered clarifying questions from the tech team and gave additional tips for remediation. We even managed to get the district to look into expanding the IT/cybersecurity program and hopefully, sponsoring a D214 CTF? :o

This has been one of the most remarkable experiences I ever had in high school and I thank everyone who helped support me. That's all and thanks for reading!

*If you are from D214 and have any videos, pictures, or social media posts of the rickroll, send them to my <Link to="/contact">contact</Link> and I'll share them below along with credit!*

<center>
    <Tweet tweetId="1388293752045903876" />
</center>

<center>
    <figure>
        <img alt="Dancing teacher" src="./teacher.gif" />
        <figcaption>
            Video by <a aria-label="nitw_it YouTube channel" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/nitwt">nitw_t</a>.
        </figcaption>
    </figure>
</center>

![](https://visitor-badge-reloaded.herokuapp.com/badge?page_id=whitehoodhacker-net-posts-2021-09-18-the-big-rick&text=hits&color=0acc74)