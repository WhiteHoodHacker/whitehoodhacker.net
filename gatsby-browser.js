import React from "react"
import {AnimatePresence} from "framer-motion"
import Layout from "./src/components/layout"

import "bootstrap/dist/css/bootstrap.min.css"
import "normalize.css/normalize.css"

// custom CSS styles
import "./src/styles/main.css"
import "./src/styles/fonts.css"

// Highlighting for code blocks
import "prismjs/themes/prism-okaidia.css"

export const wrapPageElement = ({element}) => (
    <Layout>
        <AnimatePresence initial={true} exitBeforeEnter>{element}</AnimatePresence>
    </Layout>
);