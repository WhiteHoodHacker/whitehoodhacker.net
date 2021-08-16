import * as React from "react"
import { Link, graphql } from "gatsby"
import { motion } from "framer-motion"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import PostSidebar from "../components/post-sidebar"
import Seo from "../components/seo"
import ShareBanner from "../components/share-banner"

const PostTemplate = ({ data, location }) => {
    const post = data.markdownRemark
    const { previous, next } = data
    const postUrl = data.site.siteMetadata.siteUrl + post.fields.slug

    return (
        <div className="main-page h-100">
            <Seo
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
                image={post.frontmatter.image}
            />
            <section id="top" className="container-fluid d-flex flex-column main-mh-100">
                <NavigationSpacer />
                <div className="container flex-grow-1">
                    <div className="row justify-content-center">
                        <div className="d-none d-xl-block col-xl-2">
                            <PostSidebar shareUrl={postUrl} />
                        </div>
                        <div className="col-md-10 col-xl-8">
                            <motion.p
                                className="m-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <Link to="/posts"><strong>← ../</strong></Link>
                            </motion.p>
                            <article id="post-content" itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h1 itemProp="headline"><strong>{post.frontmatter.title}</strong></h1>
                                    <p className="main-reveal-text-short d-inline-block">{post.frontmatter.date} &#8226; {post.timeToRead} min read</p>
                                </header>
                                <motion.section
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                    itemProp="articleBody"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                />
                                <hr />
                            </article>
                        </div>
                        <div className="d-none d-xl-block col-xl-2"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-xl-8">
                            <p>Published {post.frontmatter.date}. Written by <strong>WhiteHoodHacker</strong>.</p>
                            <p>If you enjoyed the post, consider sharing it!</p>
                            <ShareBanner shareUrl={postUrl} />
                            <hr />
                            <div className="text-center">
                                <p><a aria-label="Back to Top" href="#top">Back to Top</a></p>
                            </div>
                        </div>
                    </div>
                    <nav className="mb-5">
                        <div className="row justify-content-center">
                            <div className="col-6 col-md-5 col-xl-4 text-start">
                                {next && (
                                    <React.Fragment>
                                        <p className="m-0">← Newer</p>
                                        <Link to={next.fields.slug} rel="next">
                                            {next.frontmatter.title}
                                        </Link>
                                    </React.Fragment>
                                )}
                            </div>
                            <div className="col-6 col-md-5 col-xl-4 text-end">
                                {previous && (
                                    <React.Fragment>
                                        <p className="m-0">Older →</p>
                                        <Link to={previous.fields.slug} rel="prev">
                                            {previous.frontmatter.title}
                                        </Link>
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
                <Footer />
            </section>
        </div>
    )
}

export default PostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            timeToRead
            excerpt(pruneLength: 160)
            fields {
                slug
            }
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                image
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`