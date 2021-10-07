import { useDispatch, useSelector } from 'react-redux';

import "../css/Loadmore.css";
import { loadmoreAction } from '../store/asyncActions/loadmore';
// import { renderBooksAction } from '../store/booksReducer';
// import { clearResultAction } from './../store/booksReducer';

export default function Loadmore() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    // async function showBooks() {
    //     loadingBooks()
    //     let result = [];
    //     await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.search}&key=${books.apiKey}&maxResults=${books.maxResults}&orderBy=${books.sorting}&startIndex=${books.books.length}`)
    //         .then(response => response.json())
    //         .then(json => result = json.items)
    //         .then(() => dispatch(loadmoreAction(result)))
    //         .then(() => dispatch(renderBooksAction()))
    //         .then(() => dispatch(clearResultAction()))
    // }

    // const loadingBooks = () => {
    //     dispatch({type: 'LOADING'})
    // }    
    
    return (
        <div  className="loadmore-wrapp">
            <button className="loadmore-btn" onClick={() => dispatch(loadmoreAction(books))}>Load more</button>
        </div>
    );
}