import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard';

function ReviewList() {

  const [reviewData, setReviewData] = useState([]);
    console.log(reviewData)

 
  const fetchFunction = () => {
    fetch('http://127.0.0.1:3000/reviews')
    .then(response => response.json())
    .then(data => setReviewData(data))}
useEffect(fetchFunction, [])


return (
  <div className="PlatformList">
      {reviewData.map(
          
        (eachReview) => {

            return (<ReviewCard key={eachReview.id} reviewData={eachReview}/>)


      })}
      
    </div>
    )
}

export default ReviewList;