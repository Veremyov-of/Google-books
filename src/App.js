import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const books = useSelector(state => state.books);



  const handleChange = (event) => {
    const book = event.target.value;
    dispatch({type: 'INPUT_CHANGE', payload: book});
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let result = [];
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.search}&key=${books.apiKey}&maxResults=30&orderBy=${books.sorting}`)
      .then(response => response.json())
      .then(json => result = json.items)
    
    dispatch({type: 'SEARCH', payload: result});
  }

  const sorting = (event) => {
    const value = event.target.value;
    dispatch({type: 'SORTING', payload: value});
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} className="input" type="text" placeholder="Search for Books"/>
        <button type="submit">Search</button>
      </form>


      <select value={books.sorting} onChange={sorting} >
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>


      {books.books.map((book, index) => (
        <div key={index}>
          <h4>{book.volumeInfo.categories}</h4>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
        </div>
      ))}
    </div>
  );
}

export default App;
