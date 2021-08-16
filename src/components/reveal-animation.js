import React from "react"
import { useInView } from "react-intersection-observer"

const RevealAnimation = ({ children, animationClass }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })
    return (
        <div ref={ref} className={`${inView ? animationClass : ""}`}>
            {children}
        </div>
    )
}

export default RevealAnimation