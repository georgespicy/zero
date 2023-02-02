import React from 'react'

function footer({ length }) {
  return (
    <footer>
        <p>{length} List Items {length == 1 ? "item" : "items" }</p>
    </footer>
  )
}

export default footer