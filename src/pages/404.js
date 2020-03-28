import React from "react"

import Button from "../components/Button"
import SEO from "../components/seo"

import styles from "./404.module.css"

const NotFoundPage = () => (
  <>
    <SEO title="Not Found" />

    <nav className={styles["error__nav"]}>
      <a className={styles["nav__title"]} href="/">
        Becoming Agile
      </a>
    </nav>

    <h1 className={styles["error__title"]}>nothing to see here</h1>

    <section className={styles["error__body"]}>
      <p>
        Good ol' 404. You found a part of the blog that doesn't exist.
      </p>
      <p>You're bummed. I'm bummed. Let's embrace this fast feedback and make an agile about-face:</p>
    </section>
    <Button to="/" text="take me home" />
  </>
)

export default NotFoundPage
