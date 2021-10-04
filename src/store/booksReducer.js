const initialState = {
    search: '',
    result: [],
    books: [],
    apiKey: 'AIzaSyCa2H8jObyJ_7IzjULL4d0aQV8muTgEIzc',
    categories: 'All',
    sorting: 'relevance',
    loading: false,
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
                result: action.payload
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

        case 'RENDER_BOOKS':
            if(state.categories === 'All') {
                return {...state, books: state.result}
            } else {
                const newState = [];
                for(let i = 0; i < state.result.length; i++) {
                    if(state.result[i].volumeInfo?.categories !== undefined && state.result[i].volumeInfo?.categories.includes(state.categories)) { 
                        newState.push(state.result[i]);
                    }
                }
                return {...state, books: newState};
            }

            


            // console.log(state.result[0].volumeInfo?.categories);
            // return {...state, books: [...state.result]}
 
            
        default:
            return state;
    }
} 