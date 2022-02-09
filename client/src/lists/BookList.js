import React, {useState, useEffect} from "react";
import BookCard from "../cards/BookCard";
import NavBar from "../NavBar";


function BookList() {
    const [bookData, setBookData] = useState( [] );

    const fetchFunction = () => {
        fetch('http://127.0.0.1:3000/books')
        .then(response => response.json())
        .then(data => setBookData(data))
    }
    useEffect(fetchFunction, [])

    return (
        <div>
            <NavBar/>

            { bookData.map(
                (eachBook) => {

                    return (<BookCard key={eachBook.id} bookItem={eachBook}/>)
                })


            }

        </div>
    )
}

export default BookList
    
    
    
    