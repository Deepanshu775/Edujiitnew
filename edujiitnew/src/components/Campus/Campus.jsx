import React from 'react'

import './Campus.css'
import gallery_1 from '../../assets/assets/jaypee.jpg'
import gallery_2 from '../../assets/assets/jaypee3.jpg'
import gallery_3 from '../../assets/assets/jaypee2.jpg'
import gallery_4 from '../../assets/assets/jiitcampus1.jpg'
import gallery_5 from '../../assets/assets/jiit campus3.jpeg'
function Campus() {
  return (
    <div className='campus' id='campus2'>
    <div className='gallery'>
    
     <img src={gallery_1}   alt=''/>
     <img src={gallery_2}   alt=''/>
     <img src={gallery_3}   alt=''/>
     <img src={gallery_4}   alt=''/>
    </div>
     
    </div>
  )
}

export default Campus
