import { useState } from "react";
import useCustomContext from "./hooks/books-content-hooks";

function BookCreate() {

    const [title, setTitle] = useState('')

    const {createBook} = useCustomContext()

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        createBook(title)
        setTitle('')
    }



    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmitForm}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;