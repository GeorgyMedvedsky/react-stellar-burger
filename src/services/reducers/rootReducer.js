// Redux
import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredientsReducer";
import { ingredientsInConstructorReducer } from "./ingredientsInConstructorReducer";
import { viewedIngredientReducer } from "./viewedIngredientReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: ingredientsInConstructorReducer,
    viewedIngredient: viewedIngredientReducer,
    orderDetails: orderDetailsReducer
});