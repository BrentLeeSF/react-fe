import { FETCH_IMG_FAILURE, FETCH_IMG_REQUEST, FETCH_IMG_SUCCESS } from './actionType';
import axios from 'axios'

const fetchImgRequest = () => {
    return {
        type: FETCH_IMG_REQUEST
    }
}

const fetimgSuccess = (data: any) => {
    console.log('Data - - - - ',data);
    return {
        type: FETCH_IMG_SUCCESS,
        payload: data
    }
}

const fetimgFailure = (err: any) => {
    return {
        type: FETCH_IMG_FAILURE,
        payload: err
    }
}

export const fetchImageList = () => {
    return (dispatch: any) => {
        dispatch(fetchImgRequest);
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res: any)=>{
                let listOfTodos = res.data
                dispatch(fetimgSuccess(listOfTodos))
            }).catch(err=>{
                dispatch(fetimgFailure(err.message))
            })

    }
}

export { FETCH_IMG_FAILURE, FETCH_IMG_REQUEST, FETCH_IMG_SUCCESS };
