// Redux
import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredientsReducer";
import { ingredientsInConstructorReducer } from "./ingredientsInConstructorReducer";
import { currentIngredientReducer } from "./currentIngredientReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: ingredientsInConstructorReducer,
    currentIngredient: currentIngredientReducer,
    orderDetails: orderDetailsReducer
});