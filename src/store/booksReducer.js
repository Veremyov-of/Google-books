const initialState = {
    maxResults: 30,
    totalItems: 0,
    search: '',
    result: [],
    books: [],
    apiKey: process.env.REACT_APP_UNSPLASH_KEY,
    categories: 'All',
    sorting: 'relevance',
    loading: false,
    number: 0,
    stepSearch: 0
}

const INPUT_CHANGE = 'INPUT_CHANGE';
const SEARCH = 'SEARCH';
const SORTING = 'SORTING';
const CATEGORIES_CHANGE = 'CATEGORIES_CHANGE';
const LOADING = 'LOADING';
const LOADMORE = 'LOADMORE';
const RENDER_BOOKS = 'RENDER_BOOKS';
const CLEAR_RESULT = 'CLEAR_RESULT';

export const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                search: action.payload
            };

        case SEARCH:
            if(state.search) {
                return {
                    ...state,
                    result: action.payload.items,
                    totalItems: action.payload.totalItems,
                    number: 0,
                    books: [],
                    step: 0
                };
            }
            return {...state, result: []}
            

        case SORTING:
            return {
                ...state,
                sorting: action.payload
            };

        case CATEGORIES_CHANGE:
            return {
                ...state,
                categories: action.payload
            };

        case LOADING: 
                return {...state, loading: true};

        case LOADMORE: 
            return {...state, result: [...action.payload]}
        

        case RENDER_BOOKS:
            if(!state.search) {
                return {...state, books: [], loading: false}
            }

            if(state.categories === 'All') {
                return {...state, books: [...state.books, ...state.result], loading: false}
            } else {
                let newState = [];
                for(let i = 0; i < state.result.length; i++) {
                    if(state.result[i].volumeInfo?.categories !== undefined && state.result[i].volumeInfo?.categories.includes(state.categories)) {
                        newState.push(state.result[i])
                    }
                }
                return {...state, books: [...state.books, ...newState], loading: false}
            }
            

        case CLEAR_RESULT:
            return {...state, result: []}
          
            
        default:
            return state;
    }
}

export const handleChangeAction = (payload) => ({ type: INPUT_CHANGE, payload });
export const handleSubmitAction = (payload) => ({ type: SEARCH, payload});
export const handleClickloadmoreAction = (payload) => ({ type: LOADMORE, payload});
export const sortingChangeAction = (payload) => ({ type: SORTING, payload});
export const categoriesChangeAction = (payload) => ({ type: CATEGORIES_CHANGE, payload});
export const renderBooksAction = () => ({ type: RENDER_BOOKS });
export const loadingAction = () => ({ type: LOADING });
export const clearResultAction = () => ({ type: CLEAR_RESULT});
