import { 
    SET_CURRENT_ITEM
 } from "../actions/currentIngredient";

const initialState = {
    item: {}
};

export const currentIngredientReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_ITEM: {
            return {
                ...state,
                item: action.item
            };
        }
        default: {
            return state;
        }
    };
};