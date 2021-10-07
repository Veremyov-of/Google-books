import { renderBooksAction, handleSubmitAction, loadingAction } from "../booksReducer";
export const searchAction = (event, books) => {
    event.preventDefault();
    return function(dispatch) {
        dispatch(loadingAction());
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.search}&key=${books.apiKey}&maxResults=${books.maxResults}&orderBy=${books.sorting}`)
            .then(response => response.json())
            .then(json => dispatch(handleSubmitAction(json)))
            .then(() => dispatch(renderBooksAction()))
    }
}
