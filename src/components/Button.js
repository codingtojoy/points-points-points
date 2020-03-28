// src/components/Button.js

import React from "react"
import PropTypes from "prop-types"

import styles from "./Button.module.css"

const Button = ({ to, text }) => {
  return (
    <div className={styles["button"]}>
      <a className={styles["button__link"]} href={to}>
        {text}
      </a>
    </div>
  )
}

export default Button

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
