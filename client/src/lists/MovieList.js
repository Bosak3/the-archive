import React, {useState, useEffect} from "react";
import MovieCard from "../cards/MovieCard";
import NavBar from "../NavBar";

import '../styling/MovieList.css'

function MovieList() {
    const [movieData, setMovieData] = useState( [] );
    console.log(movieData)

    const fetchFunction = () => {
        fetch('http://127.0.0.1:3000/movies')
        .then(response => response.json())
        .then(data => setMovieData(data))
    }
    useEffect(fetchFunction, [])


    return (
        <div className="backgroundmovies">
            <div className="bannerimagemovies"></div>
                 <NavBar/>
            <h1 style={{color: 'white', textAlign: 'center', fontSize: 40}}>MOVIES</h1>
            <div className="div-container">
                { movieData.map(
                    (eachMovie) => {

                        return (
                        <div className="div-style">
                            <MovieCard key={eachMovie.id} movieData={eachMovie}/>
                        </div>
                        )
                    })


                }
            </div>

        </div>
    )
}

export default MovieList