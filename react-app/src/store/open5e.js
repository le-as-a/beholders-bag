// routes
const GET_SPELLS = '/spells';
const GET_BG = '/backgrounds';
const GET_FEATS = '/feats';
const GET_CONDITIONS = '/conditions';
const GET_RACES = '/races';
const GET_CLASSES = '/classes';
const GET_MAGIC_ITEMS = '/magicitems';
const GET_WEAPONS = '/weapons';

const getSpells = spells => ({
    type: GET_SPELLS,
    spells
});

const getBackgrounds = backgrounds => ({
    type: GET_BG,
    backgrounds
});

const getFeats = feats => ({
    type: GET_FEATS,
    feats
});

const getConditions = conditions => ({
    type: GET_CONDITIONS,
    conditions
});

const getRaces = races => ({
    type: GET_RACES,
    races
});

const getClasses = classes => ({
    type: GET_CLASSES,
    classes
});

const getMagicItems = magicItems => ({
    type: GET_MAGIC_ITEMS,
    magicItems
});

const getWeapons = weapons => ({
    type: GET_WEAPONS,
    weapons
});

export const grabInfo = type => async dispatch => {
    const res = await fetch(`https://api.open5e.com/${type}/`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (res.ok) {
        const data = await res.json();
        switch(type) {
            case 'spells':
                dispatch(getSpells(data));
                break;
            case 'backgrounds':
                dispatch(getBackgrounds(data));
                break;
            case 'feats':
                dispatch(getFeats(data));
                break;
            case 'conditions':
                dispatch(getConditions(data));
                break;
            case 'races':
                dispatch(getRaces(data));
                break;
            case 'classes':
                dispatch(getClasses(data));
                break;
            case 'magicitems':
                dispatch(getMagicItems(data));
                break;
            case 'weapons':
                dispatch(getWeapons(data));
                break;
        }
    }
}

export default function reducer(state = { active: null }, action) {
    let newState;
    switch(action.type) {
        case GET_SPELLS:
            newState = { active: action.spells };
            return newState;
        case GET_BG:
            newState = { active: action.backgrounds };
            return newState;
        case GET_FEATS:
            newState = { active: action.feats };
            return newState;
        case GET_CONDITIONS:
            newState = { active: action.conditions };
            return newState;
        case GET_RACES:
            newState = { active: action.races };
            return newState;
        case GET_CLASSES:
            newState = { active: action.classes };
            return newState;
        case GET_MAGIC_ITEMS:
            newState = { active: action.magicItems };
            return newState;
        case GET_WEAPONS:
            newState= { active: action.weapons };
            return newState;
        default:
            return state;
    }

}
