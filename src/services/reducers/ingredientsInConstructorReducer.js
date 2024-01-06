import {
    ADD_INGREDIENT,

} from "../actions/ingredientsInConstructor";

const initialState = {
    bun: null,
    ingredients: []
};

export const ingredientsInConstructorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, action.item]
            };
        }
        default: {
            return state;
        }
    };
};