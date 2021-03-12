import { SEARCH_POST } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case SEARCH_POST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}