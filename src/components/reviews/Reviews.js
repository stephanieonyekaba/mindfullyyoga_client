import React from 'react'
import './Reviews.css'
import Review from './Review'

function Reviews() {
  return (
    <div className='reviews'>


        <h1> Reviews</h1>
        <div className='reviews_line'></div>
        <br></br>
         <div className='review_container'>
              <Review />
         </div>

    
    
    </div>
  )
}

export default Reviews