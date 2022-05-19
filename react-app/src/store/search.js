const SET_SEARCH = '/set-search';
const setSearch = payload => ({
    type: SET_SEARCH,
    payload
});

const CLEAR_SEARCH = '/clear-search';
const clearSearch = () => ({
    type: CLEAR_SEARCH
});

export const setResults = results => async dispatch => dispatch(setSearch(results));

export const clearResults = () => async dispatch => dispatch(clearSearch());

const initialState = {};
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SET_SEARCH:
            newState = action.payload;
            return newState;
        case CLEAR_SEARCH:
            newState = {};
            return newState;
        default:
            return state;
    }
}
