import "bootstrap/dist/css/bootstrap.min.css"
import "normalize.css/normalize.css"

// custom CSS styles
import "./src/styles/main.css"
import "./src/styles/fonts.css"

// Highlighting for code blocks
import "prismjs/themes/prism-okaidia.css"

import customWrapPageElement from "./src/components/wrap-page-element"
export const wrapPageElement = customWrapPageElement

// rewrite all .html browser URLs to clean non-trailing slash URLs
// Cloudflare Pages hack to use non-trailing slashes by using gatsby-plugin-create-page-html and gatsby-plugin-remove-trailing-slashes
const replacePath = path => (path === `/` ? path : path.replace(/\.html$/, ``))
if (window.pagePath.endsWith('.html')) {
    window.pagePath = replacePath(window.pagePath)
}