
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//style
import "./css/App.css";

//npm
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

//components
import Search from './components/Search';
import Books from './components/Books';
import Loadmore from './components/Loadmore';
import Loading from './components/Loading';
import ItemBook from './components/ItemBook';
import Error from './components/Error';




function App() {

  const books = useSelector(state => state.books);

  return(
    <Router basename="/Google-books">
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Search />
              <Books />
              {books.books.length > 0 ? <Loadmore /> : ''}
              <Loading />
          </Route>
          {books.books.map((book, index) =>
            <Route key={index} path={`/${book.volumeInfo?.title}`}>
              <ItemBook book={book}/>
            </Route>
          )}
        </Switch>
        {books.error ? <Error /> : ''}
        <ScrollUpButton
          AnimationDuration={494}
        />
      </div>
    </Router>
  );
}

// function App() {

//   const dispatch = useDispatch();
//   const books = useSelector(state => state.books);

//   const [loading, setLoading] = useState(false);

//   const handleChange = (event) => {
//     const book = event.target.value;
//     dispatch({type: 'INPUT_CHANGE', payload: book});
//   }

//   async function handleSubmit(event) {
//     setLoading(true);
//     event.preventDefault();
//     let result = [];
//     await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.search}&key=${books.apiKey}&maxResults=30&orderBy=${books.sorting}`)
//       .then(response => response.json())
//       .then(json => result = json.items)
//       .then(() => setLoading(false))
    
//     dispatch({type: 'SEARCH', payload: result});
//     renderBooks();
//   }

//   const sortingChange = (event) => {
//     const value = event.target.value;
//     dispatch({type: 'SORTING', payload: value});
//   }

//   const categoriesChange = (event) => {
//     const value = event.target.value;
//     dispatch({type: 'CATEGORIES_CHANGE', payload: value});
//   }

//   const renderBooks = () => {
//     dispatch({type: 'RENDER_BOOKS'});
//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input onChange={handleChange} className="input" type="text" placeholder="Search for Books"/>
//         <button type="submit">Search</button>
//       </form>

                                                                                                         
//       <select value={books.sorting} onChange={sortingChange} >
//         <option value="relevance">relevance</option>
//         <option value="newest">newest</option>
//       </select>

//       <select value={books.categories} onChange={categoriesChange} >
//         <option value="All">All</option>
//         <option value="Art">Art</option>
//         <option value="Biography & Autobiography">Biography</option>
//         <option value="Computers">Computers</option>
//         <option value="History">History</option>
//         <option value="Medical">Medical</option>
//         <option value="Poetry">Poetry</option>
//       </select>

//       {books.books.map((book, index) => (
//         <div key={index}>
//           <h4>{book.volumeInfo.categories}</h4>
//           <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
//         </div>
//       ))}
//       {loading ? <h2>loading...</h2> : ''}
//     </div>
//   );
// }

export default App;
