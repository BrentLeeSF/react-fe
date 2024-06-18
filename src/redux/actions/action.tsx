import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from './actionType';
import { Product } from '../../interfaces/Product';

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (data: Product[]) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchProductsFailure = (err: any) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: err
    }
}

export { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS };
