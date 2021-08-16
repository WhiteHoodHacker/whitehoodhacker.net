import React from "react"
import raf from "raf"

class ScrollTracker extends React.Component {
    static defaultProps = {
        scrollInHeight: 400,
        elementTargetId: "post-content"
    }
    fixedStyle = {
        position: "sticky",
        WebkitTransition: "all .2s ease",
        MozTransition: "all .2s ease",
        OTransition: "all .2s ease",
        transition: "all .2s ease",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    }
    hiddenStyle = {
        opacity: 0
    }
    scrolledInStyle = {
        opacity: 1
    }

    constructor(props) {
        super(props)

        this.state = {
            hidden: true
        }

        this.handlingScrollUpdate = false
    }

    getScrollY = () => {
        if (window.pageYOffset !== undefined) {
            return window.pageYOffset
        } else if (window.scrollTop !== undefined) {
            return window.scrollTop
        } else {
            return (document.documentElement || document.body.parentNode || document.body).scrollTop
        }
    }

    handleScroll = () => {
        if (!this.handlingScrollUpdate) {
            this.handlingScrollUpdate = true
            raf(this.update)
        }
    }

    update = () => {
        let currentScrollY = this.getScrollY()
        let viewportHeight = window.innerHeight
        let elementTarget = document.getElementById(this.props.elementTargetId)
        this.setState({
            hidden: currentScrollY < this.props.scrollInHeight || (elementTarget == null ? false : (currentScrollY + viewportHeight) > (elementTarget.offsetTop + elementTarget.offsetHeight))
        })
        this.handlingScrollUpdate = false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    render() {
        let renderStyle = this.fixedStyle
        renderStyle = this.state.hidden ?
            {...renderStyle, ...this.hiddenStyle} :
            {...renderStyle, ...this.scrolledInStyle}
        return (
            <div style={renderStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default ScrollTracker