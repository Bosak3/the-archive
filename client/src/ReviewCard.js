import "./ItemImages.css"

function ReviewCard ({reviewData}){


    return (
        <div>
            {/* <img src={reviewData.game.image_url} alt={reviewData.movie.title} className="items"/> */}
            <p>{reviewData.description}</p>
        </div>

    )
}
export default ReviewCard