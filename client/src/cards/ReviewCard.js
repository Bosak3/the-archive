import "../styling/ItemImages.css"


function ReviewCard ({reviewData}){
    console.log(reviewData)

    return (
        <div className="div-container">
            <div className="div-style">
                <h1 style ={{color:'white'}}>{reviewData.movie.title}</h1>
                <img src={reviewData.movie.image_url} alt={reviewData.movie.title} className="items"/>
                <p >{reviewData.description}</p>

            </div>
            
        </div>

    )
}
export default ReviewCard