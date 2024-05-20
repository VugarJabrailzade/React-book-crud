import { useContext } from "react";
import BooksContext from "../../context/books";

function useCustomContext(){
    return useContext(BooksContext)
} 

export default useCustomContext