// src/templates/post.js

import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Footer from "../components/Footer"
import SEO from "../components/seo"

import styles from "./post.module.css"
import DotGrid from "../components/DotGrid"

export default ({ data }) => {
  const post = data.markdownRemark

  const [numColumns, setNumColumns] = useState(18)

  const handleNumColumns = () => {
    setNumColumns(Math.floor((window.innerWidth - 24) / 16))
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
        <a className={styles["nav__more_articles"]} href="/">
          more articles
        </a>
      </nav>

      <DotGrid numRows={9} numColumns={numColumns} scheme="aqua" />
      <h1 className={styles["post__title"]}>{post.frontmatter.title}</h1>
      <span className={styles["post__date"]}>
        {post.frontmatter.date} - {post.timeToRead} min read
      </span>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <DotGrid numRows={5} numColumns={numColumns} scheme="aqua" />

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
