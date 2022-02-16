import React, {useState, useEffect} from 'react'
import ReviewCard from '../cards/ReviewCard';
import NavBar from '../NavBar';

import "../styling/ReviewList.css"

function ReviewList() {

  const [reviewData, setReviewData] = useState([]);
 
  const fetchFunction = () => {
    fetch('http://127.0.0.1:3000/reviews')
    .then(response => response.json())
    .then(data => setReviewData(data))}
useEffect(fetchFunction, [])


return (
  <div>
      <NavBar/>
      <div className='div-container'>
        { reviewData.map(
            
          (eachReview) => {

              return (
              <div key={eachReview.id}  className= "div-style">
                <ReviewCard key={eachReview.id} reviewData={eachReview}/>
              </div>
              )
            }
          )
        }
      </div>


      
    </div>
    )
}

export default ReviewList;