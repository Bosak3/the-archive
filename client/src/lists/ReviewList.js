import React, {useState, useEffect} from 'react'
import ReviewCard from '../cards/ReviewCard';
import NavBar from '../NavBar';

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

      { reviewData.map(
          
        (eachReview) => {

            return (<ReviewCard key={eachReview.id} reviewData={eachReview}/>)
          }
        )
      }


      
    </div>
    )
}

export default ReviewList;