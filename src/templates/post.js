// src/templates/post.js

import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Footer from "../components/Footer"
import SEO from "../components/seo"

import styles from "./post.module.css"
import DotGrid from "../components/DotGrid"

export default ({ data }) => {
  const post = data.markdownRemark

  const [numColumns, setNumColumns] = useState(0)

  const handleNumColumns = () => {
    // 1024 limit based on media query in src/components/layout.css
    setNumColumns(Math.floor((Math.min(window.innerWidth, 1024) - 24) / 16))
  }

  useEffect(() => {
    handleNumColumns()

    // Recalculate when the window size changes
    window.addEventListener("resize", handleNumColumns)

    // Clean up event listener
    return function cleanup() {
      window.removeEventListener("resize", handleNumColumns)
    }
  }, [])

  return (
    <>
      <SEO
        title={post.frontmatter.title.toLowerCase()}
        description={post.excerpt}
      />
      <nav className={styles["post__nav"]}>
        <a className={styles["nav__title"]} href="/">
          points points points
        </a>
        <a className={styles["nav__more_articles"]} href="/all-posts">
          more articles
        </a>
      </nav>

      <DotGrid numRows={7} numColumns={numColumns} scheme="aqua" />
      <h1 className={styles["post__title"]}>{post.frontmatter.title}</h1>
      <span className={styles["post__date"]}>
        {post.frontmatter.date} - {post.timeToRead} min read
      </span>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <DotGrid numRows={4} numColumns={numColumns} scheme="aqua" />

      <h2 className={styles["post__title"]}>fancy a share?</h2>
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
