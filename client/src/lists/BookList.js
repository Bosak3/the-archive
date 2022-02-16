import React, {useState, useEffect} from "react";
import BookCard from "../cards/BookCard";
import NavBar from "../NavBar";

import '../styling/Book.css'


function BookList() {
    const [bookData, setBookData] = useState( [] );

    const fetchFunction = () => {
        fetch('http://127.0.0.1:3000/books')
        .then(response => response.json())
        .then(data => setBookData(data))
    }
    useEffect(fetchFunction, [])

    return (
        <div className="backgroundbooks">
            <div className="bannerimagebooks"></div>
            <NavBar/>
            <h1 style={{color: 'white', textAlign: 'center', fontSize: 40}}>BOOKS</h1>
            <div className="div-container">

            { bookData.map(
                (eachBook) => {

                    return (
                        <div  key={eachBook.id} className="div-style">
                            <BookCard key={eachBook.id} bookItem={eachBook}/>
                        </div>
                    
                    )
                })


            }
            </div>

        </div>
    )
}

export default BookList
    
    
    
    