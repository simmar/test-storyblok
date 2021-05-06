import React from 'react'
import DynamicComponent from '../components/DynamicComponent'

const Grid = ({ blok }) => {
  return (
    <section>
      <div className="container">
        {blok.columns.map((blok) =>
          (<DynamicComponent blok={blok} key={blok._uid} />)
        )}    </div>
    </section>
  )
}

export default Grid