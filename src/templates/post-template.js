import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import PostFooter from "../components/post-footer"
import PostSidebar from "../components/post-sidebar"
import Seo from "../components/seo"
import ShareBanner from "../components/share-banner"
import SubscribeForm from "../components/subscribe-form"

const PostTemplate = ({ data, location }) => {
    const post = data.mdx
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
                            <p className="m-0 main-fade-in-animation">
                                <Link to="/posts"><strong>← ../</strong></Link>
                            </p>
                            <article id="post-content" itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                                    <p className="main-reveal-text-short d-inline-block">{post.frontmatter.date} &#8226; {post.timeToRead} min read</p>
                                </header>
                                <section
                                    itemProp="articleBody"
                                    className="main-fade-in-animation"
                                >
                                    <MDXRenderer>{post.body}</MDXRenderer>
                                </section>
                                <hr />
                            </article>
                        </div>
                        <div className="d-none d-xl-block col-xl-2"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-xl-8">
                            <p>Published {post.frontmatter.date}. Written by <strong>Minh Duong</strong>.</p>
                            <SubscribeForm />
                            <p>If you enjoyed this post, please consider sharing it!</p>
                            <ShareBanner shareUrl={postUrl} />
                            <hr />
                            <PostFooter />
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
        mdx(id: { eq: $id }) {
            id
            timeToRead
            excerpt(pruneLength: 160)
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                image
            }
            body
        }
        previous: mdx(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: mdx(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`