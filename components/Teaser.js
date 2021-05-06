import React from 'react'

const Teaser = ({ blok }) => {
  return (
    <section>
      <div className="container">
        <h2>{blok.headline}</h2>
      </div>
    </section>
  )
}

export default Teaser