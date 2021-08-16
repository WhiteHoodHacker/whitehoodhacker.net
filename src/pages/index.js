import React from "react"
import { Link } from "gatsby"
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
                                                    <p className="h5 card-title"><strong>101sec Cyber Team</strong></p>
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
                                                    <p className="h5 card-title"><strong>101sec Network</strong></p>
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
                                                    <p className="h5 card-title"><strong>FIRST Robotics</strong></p>
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
                                        <p className="h5"><strong>Achievements</strong></p>
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
                                        <p className="h5"><strong>Academics</strong></p>
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
                                        <p className="h5"><strong>CyberPatriot</strong></p>
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
                                        <p className="h5"><strong>National Cyber League</strong></p>
                                    </RevealAnimation>
                                </div>
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <ul>
                                        <li>NCL Spring 2018 Preseason - 789 / 3124</li>
                                        <li>NCL Spring 2018 Individual - 577 / 2452</li>
                                        <li>NCL Spring 2019 Preseason - 104 / 4482</li>
                                        <li>NCL Spring 2019 Individual - 60 / 3607</li>
                                        <li>NCL Spring 2019 Team - 61 / 548</li>
                                        <li>NCL Spring 2020 Preseason - 9 / 5379</li>
                                        <li>NCL Spring 2020 Individual - 68 / 5357</li>
                                        <li>NCL Spring 2020 Team - 97 / 925</li>
                                        <li>NCL Spring 2021 Preseason - 11 / 5794</li>
                                        <li>NCL Spring 2021 Individual - 5 / 4180</li>
                                    </ul>
                                </RevealAnimation>
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <p className="h5"><strong>Other competitions and CTFs</strong></p>
                                    </RevealAnimation>
                                </div>
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <ul>
                                        <li>ångstromCTF 2019 - 383 / 1570</li>
                                        <li>LBC2 2021 (Advanced Division) - 4 / ??</li>
                                        <li>TJCTF 2021 - 474 / 1205</li>
                                        <li>National Cyber Scholarship Competition 2021 - 10 / 3277</li>
                                        <li>CIHSCDC 2021 - 1 / 8</li>
                                        <li>TAMUctf 2021 - 31 / 343</li>
                                        <li>HackTheBox Cyber Apocalypse 2021 - 112 / 4740</li>
                                        <li>TAMUctf 2021 - 31 / 344</li>
                                        <li>FAUST CTF 2021 - 32 / 77</li>
                                        <li>HSCTF 8 - 13 / 1162</li>
                                        <li>redpwnCTF 2021 - 3 / 1416</li>
                                        <li>UIUCTF 2021 - Challenge developer and organizer</li>
                                    </ul>
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
                <section id="contact" className="container-fluid mb-5">
                    <div className="container h-100">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1>Let's stay in touch.</h1>
                                    </RevealAnimation>
                                </div>
                                <br />
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <Link to="/contact"><button className="btn btn-lg main-btn-primary">Contact me!</button></Link>
                                </RevealAnimation>
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
