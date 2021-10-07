import { loadingAction, renderBooksAction, clearResultAction, handleClickloadmoreAction} from './../booksReducer';

export const loadmoreAction = (books) => {
    return function(dispatch) {
        dispatch(loadingAction());
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.search}&key=${books.apiKey}&maxResults=${books.maxResults}&orderBy=${books.sorting}&startIndex=${books.books.length}`)
            .then(response => response.json())
            .then(json => dispatch(handleClickloadmoreAction(json.items)))
            .then(() => dispatch(renderBooksAction()))
            .then(() => dispatch(clearResultAction()))
    }
}