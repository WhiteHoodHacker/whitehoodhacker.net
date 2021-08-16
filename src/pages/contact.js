import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="Contact" description="Let's stay in touch. Find out how to contact WhiteHoodHacker and how to do it securely." />
                <div className="container-fluid d-flex flex-column main-mh-100">
                    <NavigationSpacer />
                    <div className="container flex-grow-1">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-xl-8">
                                <h1 className="main-reveal-text-short">Contact</h1>
                                <div className="main-fade-in-animation">
                                    <p>You can send an email to "hello at whitehoodhacker dot net".</p>
                                    <p>If you want to communicate with encryption, use my <Link to="/WhiteHoodHacker.asc">PGP key</Link>.</p>
                                    <p>For verification purposes, my Discord tag is <a target="_blank" rel="noopener noreferrer" href="https://discord.com/users/387289660675588098">WhiteHoodHacker#0010</a>, but I normally don't accept requests without mutual servers/friends.</p>
                                    <p>I can also be found on social media @WhiteHoodHacker.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Contact