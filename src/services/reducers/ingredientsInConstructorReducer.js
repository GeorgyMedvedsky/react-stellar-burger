import {
    TOGGLE_BUN,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT
} from "../actions/ingredientsInConstructor";

const initialState = {
    bun: null,
    ingredients: []
};

export const ingredientsInConstructorReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_BUN: {
            return {
                ...state,
                bun: action.item
            };
        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, action.item]
            };
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients.filter(item => item.id !== action.id)]
            };
        }
        default: {
            return state;
        }
    };
};