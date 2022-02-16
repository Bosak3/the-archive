import React, {useState, useEffect} from "react";
import GameCard from "../cards/GameCard";
import NavBar from "../NavBar";


import "../styling/GameList.css"


function GameList() {
    const [gameData, setGameData] = useState( [] );

    const fetchFunction = () => {
        fetch('http://127.0.0.1:3000/games')
        .then(response => response.json())
        .then(data => setGameData(data))
    }
    useEffect(fetchFunction, [])


    return (
        <div className="background">
            <div className="bannerimage"></div>
            <NavBar/>
            <h1 style={{color: 'white', textAlign: 'center', fontSize: 40}}>GAMES</h1>
            <div className="div-container">
                { gameData.map(
                    (eachGame) => {

                        return (
                        <div key={eachGame.id} className="div-style">
                            <GameCard key={eachGame.id} gameData={eachGame} />
                        </div>
                        )
                    
                    })


                }
            </div>

        </div>
    )
}

export default GameList
    
    
    
    