import { createStore, combineReducers, applyMiddleware } from "redux";

//API
import logger from "redux-logger";

//state
import { booksReducer } from "./booksReducer";

const rootReducer = combineReducers({
    books: booksReducer
})

export const store = createStore(rootReducer, applyMiddleware(logger));
