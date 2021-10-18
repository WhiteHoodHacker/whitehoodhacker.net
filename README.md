# [WhiteHoodHacker.net](https://whitehoodhacker.net)

This website uses GatsbyJS, a static site generator based on the ReactJS framework. I chose GatsbyJS because it offered the flexibility of React without sacrificing speed and SEO.

I developed this website entirely from scratch, although most of the blog post generation was taken from [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog). Posts are generated from markdown and MDX files located in the `contents/posts` directory.

This website also uses Bootstrap 5.0, mainly for the grid system and a few visual components. Most of the visual styles are custom made (including the fancy animations). These styles can be found in `main.css`.

Page routing is a little bit wonky since I'm using Cloudflare Pages. See this [commit](https://github.com/WhiteHoodHacker/whitehoodhacker.net/commit/d3ebecf71a91b7657abfced4d1956053141dcd46) for more details.

## Quick Start

Make sure all dependences are installed:

```
npm install
```

To start development, run:

```
gatsby develop
```

To build the site and serve it, run:

```
gatsby build && gatsby serve
```

The built static site will be generated in the `public` folder.
