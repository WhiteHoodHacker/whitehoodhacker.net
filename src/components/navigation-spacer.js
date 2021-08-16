import React from "react"

class NavigationSpacer extends React.Component {
    render() {
        return (
            <div className="container invisible py-5">
                <nav className="main-navbar d-flex flex-md-row flex-column navbar navbar-expand navbar-custom">
                    <span className="navbar-brand"><div style={{ height: "46px", width: "46px" }} /></span>
                    <div className="d-flex flex-row">
                        <div style={{ height: "1.5em", margin: ".5rem 1rem" }}></div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationSpacer
