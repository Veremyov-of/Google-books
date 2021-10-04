const initialState = {
    totalItems: 0,
    search: '',
    result: [],
    books: [],
    apiKey: 'AIzaSyCa2H8jObyJ_7IzjULL4d0aQV8muTgEIzc',
    categories: 'All',
    sorting: 'relevance',
    loading: false,
    number: 0,
    loadMore: false,
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

        // case 'RENDER_BOOKS':
        //     if(state.categories === 'All') {
        //         return {...state, books: state.result}
        //     } else {
        //         const newState = [];
        //         for(let i = 0; i < state.result.length; i++) {
        //             if(state.result[i].volumeInfo?.categories !== undefined && state.result[i].volumeInfo?.categories.includes(state.categories)) { 
        //                 newState.push(state.result[i]);
        //             }
        //         }
        //         return {...state, books: newState};
        //     }

        
        case 'LOADING': {
                return {...state, loading: !state.loading};
        }


        case 'RENDER_BOOKS':
            let newState = [];
            if(state.books.length !== 0) {
                newState = [...state.books];
            }
    
            if(state.categories === 'All') {
                for(let i = state.number; i < state.number + 10; i++) {
                    newState.push(state.result[i]);
                }
                if(state.number + 10 === state.result.length) {
                    return {...state, books: newState, loadMore: false, number: state.number + 10}
                }
                return {...state, books: newState, loadMore: true, number: state.number + 10};
            }
            else {
                for(let i = state.number; i < state.result.length; i++) {
                    if(state.result[i].volumeInfo?.categories !== undefined && state.result[i].volumeInfo?.categories.includes(state.categories)) { 
                        if(newState.length === state.books.length + 10) {
                            return {...state, books: newState, loadMore: true, number: state.number + i};
                        }
                        newState.push(state.result[i]);
                    }
                    state.stepSearch += 1;
                }
                if(newState.length === 0) {
                    return {...state, books: newState, loadMore: false}
                }
                if(state.stepSearch === state.result.length) {
                    return {...state, books: newState, loadMore: false}
                }
                if(state.number + 10 === state.result.length) {
                    return {...state, books: newState, loadMore: false, number: state.number + 10}
                }
                return {...state, books: newState, loadMore: true, number: state.number + 10};
            }

            


            // console.log(state.result[0].volumeInfo?.categories);
            // return {...state, books: [...state.result]}


 
            
        default:
            return state;
    }
} 