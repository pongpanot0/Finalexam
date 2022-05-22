import React from 'react'
import "./hero.css"
const intro = ({imageSrc,h1}) => {
  return (
    <div className='hero'>
        <img src={imageSrc} alt="travel" className='hero_image' />        
        <h1 className='hero_title'>{h1}</h1>
    </div>
  )
}

export default intro