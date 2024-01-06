import { v4 as uuid } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export function addIngredient(item) {
    return {
        type: ADD_INGREDIENT,
        item: {
            ...item,
            id: uuid()
        }
    }
}