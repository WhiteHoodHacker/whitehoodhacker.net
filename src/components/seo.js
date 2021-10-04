import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, image, twitter, lang, meta }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        social {
                            twitter
                        }
                        siteUrl
                        image
                    }
                }
            }
        `
    )

    const loc_siteName = site.siteMetadata.title
    const loc_metaDescription = description || site.siteMetadata.description
    const loc_twitterCardType = image ? "summary_large_image" : "summary"
    const loc_image = image || site.siteMetadata.image
    const loc_twitter = twitter || site.siteMetadata.social.twitter

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title + " | " + loc_siteName}
            meta={[
                { name: "description", content: loc_metaDescription },
                { property: "og:site_name", content: loc_siteName },
                { property: "og:title", content: title },
                { property: "og:description", content: loc_metaDescription },
                { property: "og:image", content: loc_image },
                { property: "og:type", content: "website" },
                { name: "twitter:card", content: loc_twitterCardType },
                { name: "twitter:image", content: loc_image },
                { name: "twitter:site", content: loc_twitter },
                { name: "twitter:title", content: title },
                { name: "twitter:description", content: loc_metaDescription },
                { name: "robots", content: "index, follow" },
                { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#111111" },
                { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#f8f9fa" },
                { name: "format-detection", content: "telephone=no" },
            ].concat(meta)}
            link = {[
                { rel: "preload", as: "font", href: "/fonts/inconsolata-latin-variable-wghtOnly-normal.woff2", type: "font/woff2", crossorigin: "anonymous" },
                { rel: "icon", type: "image/x-icon", sizes: "48x48", href: "/favicon.ico" },
                { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/icon180.png" }, 
                { rel: "alternate", type: "application/rss+xml", title: "WhiteHoodHacker", href: "/rss.xml" },
            ]}
        />
    )
}

Seo.defaultProps = {
    description: "",
    lang: "en",
    meta: [],
}

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    twitter: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo