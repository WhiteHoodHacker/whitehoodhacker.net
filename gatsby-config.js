module.exports = {
    siteMetadata: {
        title: `WhiteHoodHacker`,
        description: `I am an 18 year old security researcher studying computer science at University of Illinois Urbana-Champaign.`,
        social: {
            twitter: `WhiteHoodHacker`,
        },
        author: {
            name: `WhiteHoodHacker`,
        },
        siteUrl: `https://whitehoodhacker.net`, // Do not put trailing slash
        image: `https://whitehoodhacker.net/icon256.png`,
    },
    plugins: [
        `gatsby-plugin-dark-mode`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-slug`,
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
              siteUrl: `https://whitehoodhacker.net`,
              stripQueryString: true,
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `none`,
                    quality: 100
                }
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `sitemap`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/img`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
                options: {
                    plugins: [
                        {
                            resolve: `gatsby-remark-images`,
                            options: {
                                maxWidth: 630,
                            },
                        },
                        {
                            resolve: `gatsby-remark-responsive-iframe`,
                            options: {
                                wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                                    custom_elements: [{ "content:encoded": node.html }],
                                })
                            })
                        },
                    query: `
                        {
                            allMarkdownRemark(
                                sort: { order: DESC, fields: [frontmatter___date] },
                            ) {
                                nodes {
                                    excerpt
                                    html
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                        date
                                        image
                                    }
                                }
                            }
                        }
                    `,
                        output: "/rss.xml",
                        title: "WhiteHoodHacker",
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                headers: {
                    '/fonts/*': [
                        'Cache-Control: public',
                        'Cache-Control: max-age=365000000',
                        'Cache-Control: immutable',
                    ],
                },
            },
        },
    ],
}
