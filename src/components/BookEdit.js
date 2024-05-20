import { useState } from "react";
import useCustomContext from "./hooks/books-content-hooks";

function BookEdit({book, onSubmit}) {

    const [title, setTitle] = useState(book.title)
    const {editBookById} = useCustomContext()

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit()
        editBookById(book.id, title)
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>

        )
}

export default BookEdit;