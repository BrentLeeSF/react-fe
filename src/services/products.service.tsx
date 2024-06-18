import axios from 'axios';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure} from '../redux/actions/action';

export const baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchProductsList = () => {
    return (dispatch: any) => {
        dispatch(fetchProductsRequest);
        axios.get(`${baseURL}/todos`)
            .then((res: any) => {
                dispatch(fetchProductsSuccess(res.data))
            }).catch((err: any) => {
                dispatch(fetchProductsFailure(err.message))
            })

    }
}

/*
export const fetchTodos = async (dispatch: any) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch(fetchProductsSuccess(response.data))
    } catch (error: any) {
        console.log(error);
        dispatch(fetchProductsFailure(error.message))
    }
}
*/