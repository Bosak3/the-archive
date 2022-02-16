import "../styling/ItemImages.css"
import ReviewForm from "../ReviewForm"

function MovieCard ({movieData}){

    return (
        <div style={{color: 'white'}}>
            <h1>{movieData.title}</h1>
            <a href={movieData.purchase_url} rel="noopener noreferrer" target="_blank">
                <img src={movieData.image_url} alt={movieData.title} className="items"/>
            </a>
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