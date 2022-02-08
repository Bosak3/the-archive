import React, {useState, useEffect} from "react";
import GameCard from "./GameCard";


function GameList() {
    const [gameData, setGameData] = useState( [] );
    console.log(gameData)

    const fetchFunction = () => {
        fetch('http://127.0.0.1:3000/games')
        .then(response => response.json())
        .then(data => setGameData(data))
    }
    useEffect(fetchFunction, [])


    return (
        <div>

            { gameData.map(
                (eachGame) => {

                    return (<GameCard key={eachGame.id} gameData={eachGame}/>)
                })


            }

        </div>
    )
}

export default GameList
    
    
    
    