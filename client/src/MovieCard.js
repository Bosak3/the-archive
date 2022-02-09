import "./ItemImages.css"
import ReviewForm from "./ReviewForm"

function MovieCard ({movieData}){

    return (
        <div>
            <h1>{movieData.title}</h1>
            <img src={movieData.image_url} alt={movieData.title} className="items"/>
            <br></br>
            <h3>{movieData.genre}</h3>
            <h3>{movieData.director}</h3>
            <h3>{movieData.release_year}</h3>
            <a href={movieData.purchase_url}>Watch</a>
            <ReviewForm movieData={movieData}/>
        </div>

    )
}
export default MovieCard