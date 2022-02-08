import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";


function BookList() {
    const [bookData, setBookData] = useState( [] );
    console.log(bookData)

    const fetchFunction = () => {
        fetch('http://127.0.0.1:3000/books')
        .then(response => response.json())
        .then(data => setBookData(data))
    }
    useEffect(fetchFunction, [])


    return (
        <div>

            { bookData.map(
                (eachBook) => {

                    return (<BookCard key={eachBook.id} bookData={eachBook}/>)
                })


            }

        </div>
    )
}

export default BookList
    
    
    
    