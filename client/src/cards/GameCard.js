import "../styling/ItemImages.css"
import ReviewForm from "../ReviewForm"

function GameCard ({gameData}){


    return (
        <div>
            <h1>{gameData.title}</h1>
            <a href={gameData.purchase_url} rel="noopener noreferrer" target="_blank" >
                <img src={gameData.image_url} alt={gameData.title} className="items"/>
            </a>
            <h3>{gameData.genre}</h3>
            <a href={gameData.purchase_url}>Purchase</a>
            <br></br>
            <br></br>
            <ReviewForm gameData={gameData}/>
        </div>

    )
}
export default GameCard