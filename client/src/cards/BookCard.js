import "../styling/ItemImages.css"
import ReviewForm from "../ReviewForm"

function BookCard ({bookItem}){
// console.log(bookItem)
    return (
        <div>
            <h1>{bookItem.title}</h1>
            <img src={bookItem.image_url} alt={bookItem.title} className="items"/>
            <br></br>
            <h3>{bookItem.genre}</h3>
            <h3>{bookItem.author}</h3>
            <h3>{bookItem.release_year}</h3>
            <a href={bookItem.purchase_url}>Read</a>
            <ReviewForm bookData={bookItem}/>
        </div>

    )
}
export default BookCard