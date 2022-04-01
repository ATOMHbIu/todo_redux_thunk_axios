import {ITodoState, TodoAction, TodoActionTypes} from "../../types/Todo";

const initState: ITodoState = {
    todos: [],
    loading: false,
    error: null
}

export const TodoReducer = (state= initState, action:TodoAction): ITodoState=>{
    switch (action.type){
        case TodoActionTypes.UPDATE_ITEMS:
            return {loading: false, error: null, todos: action.payload};
        case TodoActionTypes.FETCH_TODOS:
            return {loading: true, error: null, todos: []};
        case TodoActionTypes.FETCH_SUCCESS:
            return {loading: false, error: null, todos: action.payload};
        case TodoActionTypes.FETCH_ERROR:
            return {loading: false, error: action.payload, todos: []};
        default:
            return state;
    }
}