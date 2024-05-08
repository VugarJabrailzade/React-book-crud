import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App(){

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const resBok = await axios.get('http://localhost:3001/books')

        setBooks(resBok.data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const editBookById = async (id, newTitle) => {

        const reponse = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, ...reponse.data}
            }
            return book;
        })

        setBooks(updatedBooks)
    }

    const createBook = async  (title) => {
        
        const response = await axios.post('http://localhost:3001/books',{
            title: title
        });
        const updatedBooks = [...books, response.data ]
        setBooks(updatedBooks)
    };

    const deleteBookId = async (id) =>{

        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedbooks = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedbooks)
    }


    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} onDelete={deleteBookId} books={books}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

export default App;