import "./ItemImages.css"
import ReviewForm from "./ReviewForm"

function BookCard ({bookData}){


    return (
        <div>
            <h1>{bookData.title}</h1>
            <img src={bookData.image_url} alt={bookData.title} className="items"/>
            <br></br>
            <h3>{bookData.genre}</h3>
            <h3>{bookData.author}</h3>
            <h3>{bookData.release_year}</h3>
            <a href={bookData.purchase_url}>Read</a>
            <ReviewForm bookData={bookData}/>
        </div>

    )
}
export default BookCard