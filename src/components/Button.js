// src/components/Button.js

import React from "react"
import PropTypes from "prop-types"

import styles from "./Button.module.css"

const Button = ({ to, text }) => {
  return <a className={styles["button"]} href={to}>{text}</a>
}

export default Button

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
