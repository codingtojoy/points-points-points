// src/pages/all-posts.js

import React from "react"
import { graphql, Link } from "gatsby"

import Footer from "../components/Footer"
import SEO from "../components/seo"

import styles from "./all-posts.module.css"

export default ({ data }) => {
  return (
    <>
      <SEO title="All Posts" />

      <nav className={styles["all_posts__nav"]}>
        <a className={styles["nav__title"]} href="/">
          Becoming Agile
        </a>
      </nav>

      <section className={styles["all_posts__banner"]}>
        <h1 className={styles["banner__heading"]}>every post ever</h1>
      </section>

      <section className={styles["all_posts__listing"]}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className={styles["all_posts__post_container"]}>
            <Link
              className={styles["all_posts__post_link"]}
              to={node.fields.slug}
            >
              <h3 className={styles["all_posts__post_title"]}>
                {node.frontmatter.title}
              </h3>
            </Link>
            <div className={styles["all_posts__post_date"]}>
              {node.frontmatter.date} - {node.timeToRead} min read
            </div>
            <p className={styles["all_posts__post_excerpt"]}>{node.excerpt}</p>
          </div>
        ))}
      </section>

      <section className={styles["all_posts__signoff"]}>
        <h2 className={styles["signoff__heading"]}>let's keep learning</h2>
        <p className={styles["signoff__para"]}>
          Tweet me{" "}
          <a
            className={styles["all_posts__link"]}
            href="https://twitter.com/intent/tweet?screen_name=codingtojoy"
          >
            @codingtojoy
          </a>{" "}
          with topics you'd like me to cover here.
        </p>

        <Footer />
      </section>
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
