import {combineReducers} from 'redux';
import {TodoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    todo: TodoReducer
})

export type RootState = ReturnType<typeof rootReducer>;