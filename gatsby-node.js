const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// exports.onCreatePage = ({ page, actions }) => {
//     const { createPage, createRedirect, deletePage } = actions
//     const oldPage = Object.assign({}, page)
//     page.path = replacePath(page.path)
//     if (page.path !== oldPage.path) {
//         deletePage(oldPage)
//         createPage(page)
//     }
//     if (!page.path.includes('.html') && page.path !== '/') {
//         createRedirect({
//             fromPath: `${page.path}/`,
//             toPath: page.path,
//             isPermanent: true
//         })
//     }
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/post-template.js`)

    // Get all markdown blog posts sorted by date
    const result = await graphql(
        `
            {
                allMdx(
                    sort: { fields: [frontmatter___date], order: ASC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                image
                            }
                        }
                    }
                }
            }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        )
        return
    }

    const posts = result.data.allMdx.edges

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/posts" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].node.id
            const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id

            createPage({
                path: post.node.fields.slug,
                component: blogPost,
                context: {
                    id: post.node.id,
                    previousPostId,
                    nextPostId,
                },
            })
        })
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "mdx" queries will return `null` even when no
    // blog posts are stored inside "content/posts" instead of returning an error
    createTypes(`
        type SiteSiteMetadata {
            author: Author
            siteUrl: String
            social: Social
        }

        type Author {
            name: String
            summary: String
        }

        type Social {
            twitter: String
        }

        type Mdx implements Node {
            fields: Fields
            frontmatter: Frontmatter
        }

        type Fields {
            slug: String
        }

        type Frontmatter {
            title: String
            description: String
            image: String
            date: Date @dateformat
        }
    `)
}