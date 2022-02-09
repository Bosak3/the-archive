import React, {useState, useEffect} from "react";
import MovieCard from "../cards/MovieCard";
import NavBar from "../NavBar";

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
        <div>
            <NavBar/>
            { movieData.map(
                (eachMovie) => {

                    return (<MovieCard key={eachMovie.id} movieData={eachMovie}/>)
                })


            }

        </div>
    )
}

export default MovieList