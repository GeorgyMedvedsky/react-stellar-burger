import { 
    SET_CURRENT_ITEM,
    CLEAR_CURRENT_ITEM
 } from "../actions/viewedIngredient";

const initialState = {
    item: {}
};

export const viewedIngredientReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_ITEM: {
            return {
                ...state,
                item: action.item
            };
        }
        case CLEAR_CURRENT_ITEM: {
            return {
                ...state,
                item: {}
            };
        }
        default: {
            return state;
        }
    };
};