// routes
const GET_ITEMS = '/magicitems';

const getItems = payload => ({
    type: GET_ITEMS,
    payload
});

export const allItems = () => async dispatch => {
    let items = {}, slugs = [];
    let cont = true, loc = 'https://api.open5e.com/magicitems/';

    while (cont) {
        const res = await fetch(`${loc}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (res.ok) {
            const data = await res.json();
            for (let item of data.results) {
                slugs.push(item.slug);
                items = { ...items, [item.slug]: item };
            }
            if (data.next) loc = data.next;
            else {
                dispatch(getItems(items));
                cont = false;
            }
        }
    }
    return slugs;
}

const initialState = {};
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_ITEMS:
            newState = { ...state, ...action.payload };
            return newState;
        default:
            return state;
    }
}
