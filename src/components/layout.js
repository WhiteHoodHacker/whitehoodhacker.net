import React from "react"
import Navigation from "./navigation"

export default function Layout({ children }) {
    return (
        <span>
            <Navigation />
            <span>
                {children}
            </span>
        </span>
    )
}