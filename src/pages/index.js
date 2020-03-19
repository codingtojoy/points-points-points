// src/pages/index.js

import React from "react"
import { graphql, Link } from "gatsby"

import Button from "../components/Button"
import DotGrid from "../components/DotGrid"
import Footer from "../components/Footer"
import GradientWrapper from "../components/GradientWrapper"
import SEO from "../components/seo"

import styles from "./index.module.css"

export default ({ data }) => {
  return (
    <>
      <SEO title="home" />
      <GradientWrapper>
        <DotGrid />
        <h1>points points points</h1>
        <p className={styles["home__aside"]}>(a blog about becoming agile)</p>
      </GradientWrapper>
      <h2>a little about me</h2>
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

      <h2>here's the latest</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <span>
              {node.frontmatter.date} - {node.timeToRead} min read
            </span>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
      <Button to="/all-posts" text="show more" />
      <p>
        Want me to write about a specific topic? Tweet me{" "}
        <a href="https://twitter.com/codingtojoy">@codingtojoy</a>
      </p>

      <h2>spread the wealth</h2>
      <p>
        The spirit of this blog is to share knowledge for someone else’s
        benefit. If you’re an expert on a topic, consider sharing what you’ve
        learned with others. You can even use this blog as a starting point by cloning it from <a href="https://github.com/codingtojoy/points-points-points">GitHub</a>.
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
