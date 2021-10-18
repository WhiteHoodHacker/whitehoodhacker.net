import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Footer from "../components/footer"
import FrcBanner from "../components/frc-banner"
import LatestPost from "../components/latest-post"
import NavigationSpacer from "../components/navigation-spacer"
import RevealAnimation from "../components/reveal-animation"
import Seo from "../components/seo"

class Home extends React.Component {
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="Home" />
                <section id="intro" className="container-fluid main-mh-100 mb-5">
                    <NavigationSpacer />
                    <div className="container h-100">
                        <div className="row h-50 justify-content-center">
                            <div className="col-lg-7 col-md-6">
                                <h1 className="main-reveal-text-short">Hi, I'm Minh.<br />I do cybersecurity.</h1>
                                <div className="main-fade-in-animation">
                                    <p>I am an 18 year old security researcher studying computer science at University of Illinois Urbana-Champaign.</p>
                                    <p>In my free time, I play CTFs and code random things.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-7 col-8">
                                <div className="main-fade-in-animation-delay-1">
                                    <StaticImage width={300} height={300} className="main-fit-element main-circle" src="../img/portrait512.jpg" alt="Portrait" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-1">
                                <div className="main-fade-in-animation-delay-2">
                                    <LatestPost />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skills" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 ">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <h1>Here are my certifications.</h1>
                                </RevealAnimation>
                                <RevealAnimation animationClass="main-reveal-text-reverse">
                                    <p>I am committed to reaching the highest standards and pushing the limits of my knowledge.</p>
                                </RevealAnimation>
                            </div>
                        </div>
                        <RevealAnimation animationClass="main-fade-in-animation">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-3 col-sm-4 col-5">
                                    <a aria-label="Offensive Security Certified Professional on Credly" target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/dd8f0eb6-b98c-4207-a4e2-0f0f8bc17df2">
                                        <StaticImage width={256} height={256} className="main-badge" src="../img/OSCP.png" alt="Offensive Security Certified Professional" />
                                    </a>
                                </div>
                                <div className="col-md-7 col-12">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-4 col-5">
                                            <a aria-label="CompTIA IT Fundamentals on Credly" target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/034299de-42cb-4a21-a645-54c9b17b94c2">
                                                <StaticImage width={200} height={200} className="main-badge" src="../img/ITF.png" alt="CompTIA ITF+" />
                                            </a>
                                        </div>
                                        <div className="col-sm-4 col-5">
                                            <a aria-label="CompTIA A+ on Credly" target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/9e693b84-8452-488c-aaf3-16e77b41ced7">
                                                <StaticImage width={200} height={200} className="main-badge" src="../img/A.png" alt="CompTIA A+" />
                                            </a>
                                        </div>
                                        <div className="col-sm-4 col-5">
                                            <a aria-label="CompTIA Network+ on Credly" target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/7e83577c-5acb-4fcc-89b6-2c81b58d63e4">
                                                <StaticImage width={200} height={200} className="main-badge" src="../img/Network.png" alt="CompTIA Network+" />
                                            </a>
                                        </div>
                                        <div className="col-sm-4 col-5">
                                            <a aria-label="CompTIA Security+ on Credly" target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/76488e94-7792-404b-91cb-aabc7952c02f">
                                                <StaticImage width={200} height={200} className="main-badge" src="../img/Security.png" alt="CompTIA Security+" />
                                            </a>
                                        </div>
                                        <div className="col-sm-4 col-5">
                                            <a aria-label="CompTIA IT Operations Specialist on Credly" target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/5f2a4560-2a6e-41e4-9dc8-8f0bddd6d459">
                                                <StaticImage width={200} height={200} className="main-badge" src="../img/CIOS.png" alt="CompTIA IT Operations Specialist" />
                                            </a>
                                        </div>
                                        <div className="col-sm-4 col-5">
                                            <a aria-label="CompTIA Secure Infrastructure Specialist on Credly" target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/e604fdf1-44b5-4e8f-9562-bf4da5e9800c">
                                                <StaticImage width={200} height={200} className="main-badge" src="../img/CSIS.png" alt="CompTIA Secure Infrastructure Specialist" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>
                    </div>
                </section>
                <section id="experiences" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1>Below are some of my experiences.</h1>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">101sec Cyber Team</p>
                                                    <p className="card-text m-0">During high school, I established 101sec as a student-led program with the mission to make infosec engaging for students. I helped organize events, recruit new members, and educate others about cybersecurity. Today, I continue to mentor the team.</p>
                                                    <p className="card-text m-0"><a aria-label="101sec website" target="_blank" rel="noopener noreferrer" href="https://101sec.net/cyber">See website</a></p>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-end-lg" src="../img/cpxiii_nats_101sec.jpg" alt="101sec CP-XIII National Finals team" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7 order-md-2">
                                                <div className="card-body">
                                                    <p className="h5 card-title">101sec Network</p>
                                                    <p className="card-text">A side hobby that evolved into something larger, I work as a system administrator for the 101sec Minecraft server. By running this server for the past three years, I've learned how to handle incidents, perform maintenance, deploy new services, and ensure uptime while using best practices in security.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-5 order-md-1">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-start-lg" src="../img/mc_lobby.jpg" alt="101sec Network lobby" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">FIRST Robotics</p>
                                                    <p className="card-text">I'm proud to have competed in FIRST robotics for over eight years and I'm honored to be a part of FIRST alumni. During my time with <a target="_blank" rel="noopener noreferrer" href="http://www.wildstang.org/ws_wp/">WildStang</a> (FRC 111), I worked heavily with Java using a custom framework to program functions for the robot. I also developed strong communication and teamwork skills.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-end-lg" src="../img/frc_2019_champs.jpg" alt="FRC 2019 World Championship" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-lg-10 text-center">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <FrcBanner awardName="Winner" eventName="2019 Midwest Regional" />
                                    <FrcBanner awardName="Winner" eventName="2019 Seven Rivers Regional" />
                                    <div className="w-100 d-md-none d-block"></div>
                                    <FrcBanner awardName="Winner" eventName="2019 Carson Division" />
                                    <FrcBanner awardName="Skills Competition Winner" eventName="2021 Krypton Group - Infinite Recharge at Home" isLong="true" />
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <p className="h5">Achievements</p>
                                    </RevealAnimation>
                                </div>
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <ul>
                                        <li><a aria-label="CP-XIII National Finals program" target="_blank" rel="noopener noreferrer" href="https://www.uscyberpatriot.org/Documents/CP-XIII%20National%20Finals%20Program.pdf">CyberPatriot National Finalist</a></li>
                                        <li><a aria-label="National Cyber Scholarship website" target="_blank" rel="noopener noreferrer" href="https://www.nationalcyberscholarship.org/winners-2021#block-yui_3_17_2_1_1620649009028_757451">National Cyber Scholar with Honor</a></li>
                                    </ul>
                                </RevealAnimation>
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <p className="h5">Academics</p>
                                    </RevealAnimation>
                                </div>
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <ul>
                                        <li>National Honor Society</li>
                                        <li>National Technical Honor Society</li>
                                        <li>AP Scholar with Distinction</li>
                                        <li>Illinois State Scholar</li>
                                        <li>RMHS '21 Graduate with Highest Honors</li>
                                        <li>RMHS '21 Information Technology Senior Medallion</li>
                                    </ul>
                                </RevealAnimation>
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <p className="h5">CyberPatriot</p>
                                    </RevealAnimation>
                                </div>
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <ul>
                                        <li>CyberPatriot X - 3rd Place Illinois</li>
                                        <li>CyberPatriot XI - Semifinalist, 2nd Place Illinois</li>
                                        <li>CyberPatriot XII - Semifinalist, 2nd Place Illinois</li>
                                        <li>CyberPatriot XIII - National Finalist (Top 12), 1st Place Illinois</li>
                                    </ul>
                                </RevealAnimation>
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <p className="h5">CTF Competitions</p>
                                    </RevealAnimation>
                                </div>
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Rank</th>
                                                <th>Team or Alias</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>NCL Spring 2018 Preseason</td><td>789 / 3124</td><td>WhiteHoodHacker</td></tr>
                                            <tr><td>NCL Spring 2018 Individual Game</td><td>577 / 2452</td><td>WhiteHoodHacker</td></tr>
                                            <tr><td>NCL Spring 2019 Preseason</td><td>104 / 4482</td><td>WhiteHoodHacker</td></tr>
                                            <tr><td>NCL Spring 2019 Individual Game</td><td>60 / 3607</td><td>WhiteHoodHacker</td></tr>
                                            <tr><td>ångstromCTF 2019</td><td>383 / 1570</td><td>verybad</td></tr>
                                            <tr><td>NCL Spring 2019 Team Game</td><td>61 / 548</td><td>101sec</td></tr>
                                            <tr><td>NCL Spring 2020 Preseason</td><td>9 / 5379</td><td>WhiteHoodHacker</td></tr>
                                            <tr><td>NCL Spring 2020 Individual Game</td><td>68 / 5357</td><td>White</td></tr>
                                            <tr><td>NCL Spring 2020 Team Game</td><td>97 / 925</td><td>101sec</td></tr>
                                            <tr><td>TJCTF 2020</td><td>474 / 1205</td><td>101sec</td></tr>
                                            <tr><td>LBC2 2021 Advanced Division</td><td> 4 / 16</td><td>101sec</td></tr>
                                            <tr><td>NCL Spring 2021 Preseason</td><td>11 / 5794</td><td>White</td></tr>
                                            <tr><td>NCL Spring 2021 Individual Game</td><td>5 / 4180</td><td>White</td></tr>
                                            <tr><td>National Cyber Scholarship Competition 2021</td><td>10 / 3277</td><td>WhiteHoodHacker</td></tr>
                                            <tr><td>CIHSCDC 2021</td><td>1 / 8</td><td>101sec</td></tr>
                                            <tr><td>TAMUctf 2021</td><td>31 / 343</td><td>ACS Sirius</td></tr>
                                            <tr><td>HackTheBox Cyber Apocalypse 2021</td><td>112 / 4740</td><td>bob</td></tr>
                                            <tr><td>FAUST CTF 2021</td><td>32 / 77</td><td>Applied Cybersecurity Society</td></tr>
                                            <tr><td>HSCTF 8</td><td>13 / 1162</td><td>icypete</td></tr>
                                            <tr><td>redpwnCTF 2021</td><td>3 / 1416</td><td>OpeOnlyOverflows</td></tr>
                                            <tr><td>UIUCTF 2021</td><td>Challenge Dev</td><td>SIGPwny</td></tr>
                                            <tr><td>CSAW '21 Qualifiers</td><td>2 / 1214</td><td>SIGPwny</td></tr>
                                            <tr><td>PBjar CTF 2021</td><td>11 / 560</td><td>[sqrt(-1) + 1]</td></tr>
                                            <tr><td>Aviation ISAC Collegiate CTF</td><td>8 / 22</td><td>IrisSec</td></tr>
                                            <tr><td>pbctf 2021</td><td>26 / 210</td><td>IrisSec</td></tr>
                                        </tbody>
                                    </table>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="hobbies" className="container-fluid mb-5">
                    <div className="container h-100">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                            </div>
                        </div>
                    </div>
                </section>
                <section id="subscribe" className="container-fluid mb-5">
                    <div className="container h-100">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <div id="mc_embed_signup">
                                    <form action="https://gmail.us5.list-manage.com/subscribe/post?u=602886b7ffa91c629bc8d12a5&amp;id=3774b743fb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form-inline" target="_blank" novalidate>
                                        <div id="mc_embed_signup_scroll" className="form-group">
                                            <div className="d-inline-block">
                                                <RevealAnimation animationClass="main-reveal-text">
                                                    <h1><label htmlFor="mce-EMAIL">Let's stay in touch.</label></h1>
                                                </RevealAnimation>
                                            </div>
                                            <br />
                                            <RevealAnimation animationClass="main-fade-in-animation">
                                                <div className="d-inline-flex">
                                                    <input type="email" defaultValue="" name="EMAIL" className="form-control" id="mce-EMAIL" placeholder="hello@example.com" required />
                                                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_602886b7ffa91c629bc8d12a5_3774b743fb" tabindex="-1" value="" /></div>
                                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn main-btn-primary ms-2" />
                                                </div>
                                                <br />
                                                <small><em>You will only be notified of new posts. I don't spam.</em></small>
                                            </RevealAnimation>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home
