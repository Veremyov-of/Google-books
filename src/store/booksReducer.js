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

export const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                search: action.payload
            };

        case 'SEARCH':
            return {
                ...state,
                result: action.payload.items,
                totalItems: action.payload.totalItems,
                number: 0,
                books: [],
                step: 0
            };

        case 'SORTING':
            return {
                ...state,
                sorting: action.payload
            };

        case 'CATEGORIES_CHANGE':
            return {
                ...state,
                categories: action.payload
            };

        case 'LOADING': 
                return {...state, loading: true};

        case 'LOADMORE': 
            return {...state, result: [...action.payload]}
        

        case 'RENDER_BOOKS':
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
            

        case 'CLEAR_RESULT':
            return {...state, result: []}
          
            
        default:
            return state;
    }
} 