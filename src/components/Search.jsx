import { useDispatch, useSelector } from 'react-redux';

//style
import "../css/Search.css";

export default function Search() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    const handleChange = (event) => {
        const book = event.target.value;
        dispatch({type: 'INPUT_CHANGE', payload: book});
      }
    
    async function handleSubmit(event) {
        loadingBooks();
        event.preventDefault();
        let result = [];
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.search}&key=${books.apiKey}&maxResults=${books.maxResults}&orderBy=${books.sorting}`)
            .then(response => response.json())
            .then(json => result = json)
        dispatch({type: 'SEARCH', payload: result});
        renderBooks();
    }

    const sortingChange = (event) => {
        const value = event.target.value;
        dispatch({type: 'SORTING', payload: value});
    }

    const categoriesChange = (event) => {
        const value = event.target.value;
        dispatch({type: 'CATEGORIES_CHANGE', payload: value});
    }

    const renderBooks = () => {
        dispatch({type: 'RENDER_BOOKS'});
    }

    const loadingBooks = () => {
        dispatch({type: 'LOADING'})
    }

    return (
        <div className='search'>
            <h1 className="search-title">Search for books</h1>          
            <form className='search-form' onSubmit={handleSubmit}>
                <input className='search-input' onChange={handleChange} type="text" value={books.search} placeholder="Search for Books"/>
                <button className='search-btn' type="submit">Search</button>
            </form>

                                                                                                            
            <div className='search-filter'>
                <h3>sorting:</h3>
                <select className='search-select' value={books.sorting} onChange={sortingChange} >
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>

                <h3>categories:</h3>
                <select className='search-select' value={books.categories} onChange={categoriesChange} >
                    <option value="All">All</option>
                    <option value="Art">Art</option>
                    <option value="Biography & Autobiography">Biography</option>
                    <option value="Computers">Computers</option>
                    <option value="History">History</option>
                    <option value="Medical">Medical</option>
                    <option value="Poetry">Poetry</option>
                </select>
            </div>
            <h2>Found {books.books.length > 0 ? books.totalItems : '0'} results</h2>
        </div>
    );
}