import "./ItemImages.css"
import ReviewForm from "./ReviewForm"

function GameCard ({gameData}){


    return (
        <div>
            <h1>{gameData.title}</h1>
            <img src={gameData.image_url} alt={gameData.title} className="items"/>
            <br></br>
            <a href={gameData.purchase_url}>Purchase</a>
            <h3>{gameData.genre}</h3>
            <ReviewForm gameData={gameData}/>
        </div>

    )
}
export default GameCard