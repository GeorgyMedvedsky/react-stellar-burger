import { GET_ORDER_DETAILS } from "../actions/orderDetails";

const initialState = {
    id: ''
};

export const orderDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDER_DETAILS: {
            return {
                ...state,
                id: action.id
            }
        }
        default: {
            return state
        }
    };
};