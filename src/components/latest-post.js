import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

const LatestPost = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                        nodes {
                            excerpt
                            fields {
                                slug
                            }
                            frontmatter {
                                date(formatString: "MMMM DD, YYYY")
                                title
                                description
                            }
                        }
                    }
                }
            `}
            render={data => (
                <React.Fragment>
                    {data.allMarkdownRemark.nodes.length > 0 &&
                        <div className="card-body main-box main-color-surface my-3">
                            <p className="h5 card-title">Latest post:</p>
                            <Link to="/posts" state={{ slug: data.allMarkdownRemark.nodes[0].fields.slug }} itemProp="url"><p className="card-text m-0">{data.allMarkdownRemark.nodes[0].frontmatter.title}</p></Link>
                            <p className="card-text"><small>{data.allMarkdownRemark.nodes[0].frontmatter.description || data.allMarkdownRemark.nodes[0].frontmatter.excerpt}</small></p>
                        </div>
                    }
                </React.Fragment>
            )}
        />
    )
}

export default LatestPost