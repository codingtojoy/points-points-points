// src/components/Button.js

import React from "react"
import PropTypes from "prop-types"

const Button = ({ to, text }) => {
  return <a href={to}>{text}</a>
}

export default Button

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
