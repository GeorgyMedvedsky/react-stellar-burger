import { URL } from "../../utils/constance";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export function getIngredients() {
    return dispatch => {
        dispatch({
            type: GET_ITEMS_REQUEST
        });

        fetch(URL).then(res => {
            if(!res.ok) {
                dispatch({
                    type: GET_ITEMS_FAILED
                });
            } else {
                return res.json();
            };
        }).then(result => {
            dispatch({
                type: GET_ITEMS_SUCCESS,
                items: result.data
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: GET_ITEMS_FAILED
            });
        });
    };
};