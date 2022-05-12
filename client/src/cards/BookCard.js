import "../styling/ItemImages.css"
import ReviewForm from "../ReviewForm"

function BookCard ({bookItem}){
// console.log(bookItem)
    return (
        <div>
            <h1>{bookItem.title}</h1>
            <a href={bookItem.purchase_url} rel="noopener noreferrer" target="_blank">
                <img src={bookItem.image_url} alt={bookItem.title}  className="items"/>
            </a>
            <br></br>
            <h3>{bookItem.genre}</h3>
            <h3>{bookItem.author}</h3>
            <h3>{bookItem.release_year}</h3>
            <a href={bookItem.purchase_url}>Read Here</a>
            <ReviewForm bookData={bookItem}/>
        </div>

    )
}
export default BookCard