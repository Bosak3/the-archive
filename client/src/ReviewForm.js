import React, { useState, useEffect } from "react";

function ReviewForm ({gameData}) {
    const [reviewFormData, setReviewFormData] = useState ({
        description:"",
        game_id: null
    })
    console.log(reviewFormData)
    

    function checkKindOfData(){
        if (gameData){
            setReviewFormData(
                {
                    ...reviewFormData, game_id: gameData.id
                }
            ); 
        }

    }
    useEffect(checkKindOfData, [])

    function handleChange(e) {
        setReviewFormData({
            ...reviewFormData, [e.target.id]: e.target.value,
        });
    }

    function handleSubmit (e) {
        e.preventDefault(e);

        fetch("http://127.0.0.1:3000/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewFormData),
        });
        window.location.reload()
    }

    return(
    
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="description" 
                value={reviewFormData.description} 
                onChange={handleChange}
            />
            <button type="submit">Leave Review</button>
        </form>




    )


}

export default ReviewForm