import { useState } from "react";
import BookEdit from "./BookEdit"
import useCustomContext from "./hooks/books-content-hooks";


function BookShow({book}) {

    const [showEdit, setShowEdit] = useState(false)
    const {deleteBookId} = useCustomContext()


    const handleDeleteClick = () =>{
        deleteBookId(book.id)
    }

    const handleSubmit = () => {
        setShowEdit(false)
    }

    const handleEditClick = ()=> {
        setShowEdit(!showEdit)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
      content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book"/>
            {content}
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
        <button className="delete" onClick={handleDeleteClick}>
            Delete
        </button>
        </div>
        </div>
    )
}

export default BookShow;