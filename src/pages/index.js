// src/pages/index.js

import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import Button from "../components/Button"
import Footer from "../components/Footer"
import SEO from "../components/seo"

import styles from "./index.module.css"

export default ({ data }) => {
  return (
    <>
      <SEO title="Home" />

      <Helmet>
        <script
          src="https://kit.fontawesome.com/4d196fc311.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <nav className={styles["home__nav"]}>
        <span className={styles["nav__name"]}>Greg Rancourt</span>
        <div className={styles["nav__social"]}>
          <span className={styles["social__background"]}></span>
          <a
            href="https://twitter.com/codingtojoy"
            title="@codingtojoy Twitter profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/codingtojoy"
            title="@codingtojoy GitHub profile"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </nav>

      <section className={styles["home__banner"]}>
        <h1 className={styles["home__title"]}>becoming agile</h1>
      </section>

      <section className={styles["home__about"]}>
        <h2 className={styles["about__heading"]}>a little about me</h2>
        <p className={styles["about__para"]}>
          I’ve been an engineer since 2008, working on a variety of aerospace
          and defense programs in technical and leadership roles on agile teams.
          I’m currently working as an agile coach and change management expert.
        </p>
        <p className={styles["about__para"]}>
          I am always learning, usually through some sort of creative pursuit.
          Web development is currently filling my nights and weekends.
        </p>
        <p className={styles["about__para"]}>
          I created this blog to share some of what I’ve learned over the years
          in the hope that it helps people improve their lives at work.
        </p>
      </section>

      <section className={styles["home__latest"]}>
        <h2 className={styles["latest__heading"]}>here's the latest</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className={styles["home__post_container"]}>
            <Link className={styles["home__post_link"]} to={node.fields.slug}>
              <h3 className={styles["home__post_title"]}>
                {node.frontmatter.title}
              </h3>
            </Link>
            <div className={styles["home__post_date"]}>
              {node.frontmatter.date} - {node.timeToRead} min read
            </div>
          </div>
        ))}
        <Button to="/all-posts" text="show more" />
      </section>

      <section className={styles["home__signoff"]}>
        <h2 className={styles["signoff__heading"]}>you can help others</h2>
        <p className={styles["signoff__para"]}>
          The spirit of this blog is to share knowledge for someone else’s
          benefit. If you’re an expert on a topic, consider sharing what you’ve
          learned with others. You can even use this blog as a starting point by
          cloning it from{" "}
          <a
            className={styles["home__link"]}
            href="https://github.com/codingtojoy/becoming-agile"
          >
            GitHub
          </a>
          .
        </p>

        <Footer />
      </section>
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
          timeToRead
        }
      }
    }
  }
`
