// src/pages/all-posts.js

import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"

import DotGrid from "../components/DotGrid"
import Footer from "../components/Footer"
import SEO from "../components/seo"

import styles from "./all-posts.module.css"

export default ({ data }) => {
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
      <SEO title="all posts" />
      <nav className={styles["all_posts__nav"]}>
        <a className={styles["nav__title"]} href="/">
          points points points
        </a>
      </nav>

      <DotGrid numRows={9} numColumns={numColumns} scheme="aqua" />
      <h2 className={styles["all_posts__section_heading"]}>every post ever</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles["all_posts__post_container"]}>
          <Link
            className={styles["all_posts__post_link"]}
            to={node.fields.slug}
          >
            <h3 className={styles["all_posts__post_title"]}>
              {node.frontmatter.title}
            </h3>
            <span className={styles["all_posts__post_date"]}>
              {node.frontmatter.date} - {node.timeToRead} min read
            </span>
            <p className={styles["all_posts__post_excerpt"]}>{node.excerpt}</p>
          </Link>
        </div>
      ))}

      <DotGrid numRows={4} numColumns={numColumns} scheme="aqua" />
      <h2 className={styles["all_posts__section_heading"]}>want even more?</h2>
      <p>
        Tweet me{" "}
        <a
          className={styles["all_posts__link"]}
          href="https://twitter.com/codingtojoy"
        >
          @codingtojoy
        </a>{" "}
        with topics you'd like me to cover here.
      </p>

      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
