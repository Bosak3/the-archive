import "../styling/ItemImages.css"

function ReviewCard ({reviewData}){


    return (
        <div>
            {/* <img src={reviewData.image_url} alt={reviewData.title} className="items"/> */}
            <p>{reviewData.description}</p>
        </div>

    )
}
export default ReviewCard