import React from "react"
import Helmet from "react-helmet"
import Seo from "../components/seo"

class WPAdmin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta http-equiv="Refresh" content="0; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                </Helmet>
                <Seo title="Log In ‹ WhiteHoodHacker — WordPress" description="Log In to WordPress Admin" />
            </React.Fragment>
        )
    }
}

export default WPAdmin