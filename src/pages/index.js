// src/pages/index.js

import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"

import Button from "../components/Button"
import DotGrid from "../components/DotGrid"
import Footer from "../components/Footer"
import SEO from "../components/seo"

import styles from "./index.module.css"

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
      <SEO title="home" />
      <DotGrid numRows={4} numColumns={numColumns} scheme="sunset" />
      <h1 className={styles["home__title"]}>points points points</h1>
      <p className={styles["home__aside"]}>(a blog about becoming agile)</p>
      <DotGrid numRows={4} numColumns={numColumns} scheme="sunset" />
      <h2 className={styles["home__section_heading"]}>a little about me</h2>
      <p>
        Howdy, folks! I’ve been an engineer since 2008, working on a variety of
        aerospace and defense programs in technical and leadership roles on
        agile teams. I’m currently working as an agile coach and change
        management expert.
      </p>
      <p>
        I am always learning, usually through some sort of creative pursuit. Web
        development is currently filling my nights and weekends.
      </p>
      <p>
        I created this blog to share some of what I’ve learned over the years in
        the hope that it helps people improve their lives at work.
      </p>

      <h2 className={styles["home__section_heading"]}>here's the latest</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles["home__post_container"]}>
          <Link className={styles["home__post_link"]} to={node.fields.slug}>
            <h3 className={styles["home__post_title"]}>
              {node.frontmatter.title}
            </h3>
            <span className={styles["home__post_date"]}>
              {node.frontmatter.date} - {node.timeToRead} min read
            </span>
            <p className={styles["home__post_excerpt"]}>{node.excerpt}</p>
          </Link>
        </div>
      ))}
      <Button to="/all-posts" text="show more" />
      <p>
        Want me to write about a specific topic? Tweet me{" "}
        <a
          className={styles["home__link"]}
          href="https://twitter.com/codingtojoy"
        >
          @codingtojoy
        </a>
      </p>

      <h2 className={styles["home__section_heading"]}>spread the wealth</h2>
      <p>
        The spirit of this blog is to share knowledge for someone else’s
        benefit. If you’re an expert on a topic, consider sharing what you’ve
        learned with others. You can even use this blog as a starting point by
        cloning it from{" "}
        <a
          className={styles["home__link"]}
          href="https://github.com/codingtojoy/points-points-points"
        >
          GitHub
        </a>
        .
      </p>

      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
