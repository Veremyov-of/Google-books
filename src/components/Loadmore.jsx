import { useDispatch, useSelector } from 'react-redux';

export default function Loadmore() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    async function showBooks() {
        loadingBooks()
        let result = [];
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.search}&key=${books.apiKey}&maxResults=${books.maxResults}&orderBy=${books.sorting}&startIndex=${books.books.length}`)
            .then(response => response.json())
            .then(json => result = json.items)
            .then(() => dispatch({type: 'LOADMORE', payload: result}))
            .then(() => dispatch({type: 'RENDER_BOOKS'}))
            .then(() => dispatch({type: 'CLEAR_RESULT'}))
    }

    const loadingBooks = () => {
        dispatch({type: 'LOADING'})
    }
    
    return (
        <div  className="loadmore-wrapp">
            <button className="loadmore-btn" onClick={showBooks}>Load more</button>
        </div>
    );
}