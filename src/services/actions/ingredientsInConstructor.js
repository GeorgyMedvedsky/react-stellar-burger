import { v4 as uuid } from 'uuid';

export const TOGGLE_BUN = 'TOGGLE_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function toggleBun(item) {
    return {
        type: TOGGLE_BUN,
        item
    }
}
export function addIngredient(item) {
    return {
        type: ADD_INGREDIENT,
        item: {
            ...item,
            id: uuid()
        }
    }
}
export function removeIngredient(id) {
    return {
        type: REMOVE_INGREDIENT,
        id
    }
}