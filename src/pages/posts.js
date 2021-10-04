import React from "react"
import { Link, graphql, navigate } from "gatsby"
import { motion } from "framer-motion"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"

const variants = {
    paragraph: {
        color: "var(--color-primary)",
        display: "block",
        fontSize: "1em",
        marginTop: "0.67em",
        marginLeft: 0,
        marginRight: 0,
        visibility: "visible",
        position: "absolute"
    },
    header: {
        color: "var(--color-title)",
        display: "block",
        fontSize: "2em",
        marginTop: "0.67em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
        visibility: "visible",
        position: "absolute",
        top: 0
    },
    gone: {
        visibility: "hidden"
    }
}

const PostsIndex = ({ data, location }) => {
    const posts = data.allMdx.nodes
    const [indexClicked, setIndexClicked] = React.useState(null)

    if (location != null && location.state != null && location.state.slug != null) {
        setTimeout(function () {
            setIndexClicked(location.state.slug)
            navigate(location.state.slug, {replace: true})
        }, 1250) 
    }

    // resizes spacer div for post titles on render/window resize, due to titles being absolutely positioned
    // this is janky af, but as along as you don't resize your window repeatedly, you won't run into performance issues. proper fix todo
    React.useLayoutEffect(() => {
        const updateOnResize = () => {
            posts.forEach(post => {
                var newHeight = document.querySelector('h1[data-slug="' + post.fields.slug + '"]').offsetHeight
                document.querySelector('div[data-slug="' + post.fields.slug + '"]').setAttribute("style","height:" + newHeight + "px")
            })
        }
        updateOnResize()
        window.addEventListener("resize", updateOnResize)
        return () => window.removeEventListener("resize", updateOnResize)
    }, [posts])

    if (posts.length === 0) {
        return (
            <div className="main-page h-100">
                <Seo title="Posts" description="See and read all posts from WhiteHoodHacker. I promise I'm not that boring." />
                <div className="container-fluid d-flex flex-column main-mh-100">
                    <NavigationSpacer />
                    <div className="container flex-grow-1">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-xl-8">
                                <p className="main-reveal-text-short d-inline-block">Oops, there are no posts... yet :p</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }

    return (
        <div className="main-page h-100">
            <Seo title="Posts" />
            <div className="container-fluid d-flex flex-column main-mh-100">
                <NavigationSpacer />
                <div className="container flex-grow-1">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-xl-8">
                            <p className="m-0 invisible">Posts</p>
                            <ol style={{ listStyle: "none", padding: "0", position: "relative" }}>
                                {posts.map(post => {
                                    const title = post.frontmatter.title || post.fields.slug

                                    return (
                                        <li key={post.fields.slug.toString()}>
                                            <article
                                                className="post-list-item"
                                                itemScope
                                                itemType="http://schema.org/Article"
                                            >
                                                <header>
                                                    <motion.h1
                                                        initial="paragraph"
                                                        exit={ indexClicked === post.fields.slug ? "header" : "gone" }
                                                        variants={variants}
                                                        transition={{ ease: "circOut", duration: (indexClicked === post.fields.slug ? 0.5 : 0.0) }}
                                                        onClick={() => setIndexClicked(post.fields.slug)}
                                                        layout
                                                        data-slug={post.fields.slug.toString()}
                                                    >
                                                        <strong className="main-reveal-text-short d-block">
                                                            <Link to={post.fields.slug} itemProp="url">
                                                                <motion.span
                                                                    itemProp="headline"
                                                                    exit={{ color: "var(--color-title)" }}
                                                                    transition={{ ease: "circOut", duration: (indexClicked === post.fields.slug ? 0.5 : 0.0) }}
                                                                >
                                                                    {title}
                                                                </motion.span>
                                                            </Link>
                                                        </strong>
                                                    </motion.h1>
                                                    <div style={{ height: "1.2em", paddingTop: "0.67em" }} data-slug={post.fields.slug.toString()}></div>
                                                </header>
                                                <motion.section
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ ease: "circOut", duration: (indexClicked === post.fields.slug ? 0.2 : 0.0) }}
                                                    style={{ marginTop: "1em" }}
                                                >
                                                    <div className="main-fade-in-animation">
                                                        <small>{post.frontmatter.date} &#8226; {post.timeToRead} min read</small>
                                                        <p itemProp="description">{post.frontmatter.description || post.excerpt}</p>
                                                    </div>
                                                </motion.section>
                                            </article>
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
                <motion.span
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "circOut", duration: (indexClicked != null ? 0.2 : 0.0) }}
                    style={{ marginTop: "1em" }}
                >
                    <Footer />
                </motion.span>
            </div>
        </div>
    )
}

export default PostsIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                timeToRead
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "YYYY-MM-DD")
                    title
                    description
                    image
                }
            }
        }
    }
`