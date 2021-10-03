const initialState = {
    search: '',
    result: [],
    books: [],
    apiKey: 'AIzaSyCa2H8jObyJ_7IzjULL4d0aQV8muTgEIzc',

    categories: 'all',
    sorting: 'relevance',

}

export const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                search: action.payload
            }

        case 'SEARCH':
            return {
                ...state,
                result: action.payload
            }

        case 'SORTING':
            return {
                ...state,
                sorting: action.payload
            }
            
        default:
            return state;
    }
} 