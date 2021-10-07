import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//API
import logger from "redux-logger";

//state
import { booksReducer } from "./booksReducer";

const rootReducer = combineReducers({
    books: booksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk,logger));
