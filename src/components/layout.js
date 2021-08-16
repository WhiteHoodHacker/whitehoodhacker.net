import React from "react"
import { AnimatePresence } from "framer-motion"
import Navigation from "./navigation"

export default function Layout({ children }) {
    return (
        <span>
            <Navigation />
            <AnimatePresence initial={true} exitBeforeEnter>
                {children}
            </AnimatePresence>
        </span>
    )
}