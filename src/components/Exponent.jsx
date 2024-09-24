import React from 'react'

function Exponent({num, exponent, count, label, calc}) {
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{label}</p>
    <p className="exponent-result">{calc} = <span className="total">{count**2}</span></p>
  </div>
  )
}

export default Exponent;