const SET_SEARCH = '/search-results';
const setSearch = payload => ({
    type: SET_SEARCH,
    payload
});

export const setResults = results => async dispatch => dispatch(setSearch(results));

const initialState = {};
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SET_SEARCH:
            newState = { ...state, search: action.payload };
            return newState;
        default:
            return state;
    }
}
