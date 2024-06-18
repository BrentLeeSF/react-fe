import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../actions/action';

const initialstate = {
    loading: true,
    data: [],
    error: ''
}

export const ProductsReducer = (state = initialstate, action: any) => {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_PRODUCTS_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ''
        }
        case FETCH_PRODUCTS_FAILURE: return {
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}