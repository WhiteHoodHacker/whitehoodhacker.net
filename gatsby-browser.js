import "bootstrap/dist/css/bootstrap.min.css"
import "normalize.css/normalize.css"

// custom CSS styles
import "./src/styles/main.css"
import "./src/styles/fonts.css"

// Highlighting for code blocks
import "prismjs/themes/prism-okaidia.css"

import customWrapPageElement from "./src/components/wrap-page-element"
export const wrapPageElement = customWrapPageElement

// this is a hack to fix missing styles on refresh in production
// reference: https://github.com/gatsbyjs/gatsby/issues/17676#issuecomment-535796737
import ReactDOM from "react-dom"
export function replaceHydrateFunction() {
    return (element, container, callback) => {
        ReactDOM.render(element, container, callback);
    };
}