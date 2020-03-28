// src/templates/post.js

import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Footer from "../components/Footer"
import SEO from "../components/seo"

import styles from "./post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
      />

      <Helmet>
        <script
          src="https://kit.fontawesome.com/4d196fc311.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <nav className={styles["post__nav"]}>
        <a className={styles["nav__title"]} href="/">
          Becoming Agile
        </a>
        <a className={styles["nav__more_posts"]} href="/all-posts">
          more posts
        </a>
      </nav>

      <h1 className={styles["post__title"]}>{post.frontmatter.title}</h1>
      <span className={styles["post__date"]}>
        {post.frontmatter.date} - {post.timeToRead} min read
      </span>
      <div className={styles["post__content"]} dangerouslySetInnerHTML={{ __html: post.html }} />

      <section className={styles["post__signoff"]}>
        <h2 className={styles["signoff__heading"]}>be a thought leader</h2>
        <p className={styles["signoff__para"]}>
          Spread the knowledge if you found it useful. You have the power to
          equip others for change.
        </p>
        <div className={styles["post__social"]}>
          <p className={styles["social__share"]}>Share:</p>
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" title="Share this page via Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <Footer />
      </section>
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
