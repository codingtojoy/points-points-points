// src/templates/post.js

import React from "react"
import { graphql } from "gatsby"

import Footer from "../components/Footer"
import GradientWrapper from "../components/GradientWrapper"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <nav>
        <a href="/">points points points</a>
        <a href="/">more posts</a>
      </nav>

      <GradientWrapper>
        <h1>{post.frontmatter.title}</h1>
        <span>
          {post.frontmatter.date} - {post.timeToRead} min read
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </GradientWrapper>

      <h2>fancy a share?</h2>
      <p>Spread the knowledge if you found it useful.</p>

      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      excerpt
      timeToRead
    }
  }
`
