// src/components/DotGrid.js

import React from "react"
import PropTypes from "prop-types"

import styles from "./DotGrid.module.css"

const DotGrid = ({ numRows, numColumns, scheme }) => {
  // Set style
  let dotClass = styles["dots__dot_grass"]
  switch (scheme) {
    case "grass":
      dotClass = styles["dots__dot_grass"]
      break
    case "aqua":
      dotClass = styles["dots__dot_aqua"]
      break
    case "summer":
      dotClass = styles["dots__dot_summer"]
      break
    default:
      dotClass = styles["dots__dot_grass"]
      break
  }

  // Create dots
  let dots = []
  for (let i = 0; i < numRows * numColumns; i++) {
    dots.push(<span key={i} className={dotClass}></span>)
  }

  // Set grid width
  let gridWidth = 16 * (numColumns - 1) + 8

  return (
    <div className={styles["dots__wrapper"]}>
      <div className={styles["dots__grid"]} style={{ width: gridWidth }}>
        {dots}
      </div>
    </div>
  )
}

export default DotGrid

DotGrid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numColumns: PropTypes.number.isRequired,
}
