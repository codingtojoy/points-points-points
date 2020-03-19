// src/components/GradientWrapper.js

import React from "react"
import PropTypes from "prop-types"

const GradientWrapper = props => {
  return <div>{props.children}</div>
}

export default GradientWrapper

GradientWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
