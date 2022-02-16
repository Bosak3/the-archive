import "../styling/ItemImages.css"


function ReviewCard ({reviewData}){
    console.log(reviewData)

    function ItemReview(){
        if(reviewData.movie){
            
            return(
                <div className="div-style">
                    <h1>{reviewData.movie.title}</h1>
                    <img src={reviewData.movie.image_url} alt={reviewData.movie.title} className="items"/>
                    <p>{reviewData.description}</p>
                </div>
            )

        }else if(reviewData.game){
            return(
                <div className="div-style">
                    <h1>{reviewData.game.title}</h1>
                    <img src={reviewData.game.image_url} alt={reviewData.game.title} className="items"/>
                    <p >{reviewData.description}</p>

                </div>
            )
        } else if(reviewData.book){
            return( 
                <div className="div-style">
                    <h1>{reviewData.book.title}</h1>
                    <img src={reviewData.book.image_url} alt={reviewData.book.title} className="items"/>
                    <p >{reviewData.description}</p>
                </div>
            )
        }

    }

    
    

    return (
        <div className="div-container">
            {ItemReview()}
            
        </div>

    )
}
export default ReviewCard