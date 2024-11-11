import React from 'react'
import 'ldrs/mirage'



const Loader = () => {
  return (
    <div className="container-loader">

    <l-mirage
    size="60"
    speed="2.5"
    color="black" 
    ></l-mirage>
    </div>
  )
}

export default Loader