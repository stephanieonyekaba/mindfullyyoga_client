import React from 'react'
import { useState, useEffect, setState } from 'react'
import { GoChevronLeft, GoChevronRight, ImQuotesLeft } from 'react-icons/go'
import {getAllReviews} from "../../api/reviews_api"
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


function Review() {
const [reviews, setReviews] = useState(null);
const [index, setIndex] = useState(0); 
// const {name, quote} = reviews[index]

const checkNum = (num) => {
  if (num > reviews.length - 1) {
    return 0;
  }
  else if (num < 0) {
    return reviews.length - 1;
  }
  return num;
};

const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNum(newIndex);
  })
}

const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNum(newIndex);
  })
}

useEffect(() => {
  getAllReviews()

  .then (res => {
    console.log('this is the object returned from reviews ', res.data.reviews)
    setReviews(res.data.reviews)
  })
  .catch(console.error)
}, [])

if (!reviews) {
  return <p>Loading</p>
}
else if (reviews.length === 0) {
  return <p>No reviews</p>
}
if (reviews.length > 0) {
  reviews.Jsx = reviews.map(reviews => (
<div>
      <div class="body" className='review_text_container' >
      <img className="review_img" src={reviews.img_url} ></img>
          <h1 className='review_name'>{reviews.name}</h1>
          <p class="review_quote"> <bold> " </bold> {reviews.quote} <bold> " </bold> </p>
          
      </div>


</div>

))

} 


  return (
    <div className='review'>
      <div className='review_img'>
      {reviews.Jsx[index]}
      <div className='button-container' >
        <button className='prev-btn' onClick={prevPerson}>
          <GoChevronLeft />
        </button>
        <button className='next-btn'onClick={nextPerson} >
          <GoChevronRight />
        </button>

      </div>

    









    </div>
    </div>
  )
}

export default Review