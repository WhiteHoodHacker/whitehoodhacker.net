import React from "react"
import { AnimatePresence } from "framer-motion"
import Layout from "./layout"

const wrapPageElement = ({element}) => (
    <Layout>
        <AnimatePresence initial={true} exitBeforeEnter>{element}</AnimatePresence>
    </Layout>
)

export default wrapPageElement