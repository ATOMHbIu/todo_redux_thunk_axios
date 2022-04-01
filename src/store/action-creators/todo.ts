import {Dispatch} from "react";
import {ITodoItem, TodoAction, TodoActionTypes} from "../../types/Todo";
import TodoService from "../../services/TodoService";


export const updateList =(data: ITodoItem[])=>{
    return (dispatch: Dispatch<TodoAction>)=>{
        dispatch({type: TodoActionTypes.UPDATE_ITEMS, payload: data})
    }
}

export const fetchTodos = () =>{
    return async (dispatch: Dispatch<TodoAction>) =>{
        try{
            dispatch({type: TodoActionTypes.FETCH_TODOS});
            const data = await TodoService.getTodos(10,0);
            dispatch({type: TodoActionTypes.FETCH_SUCCESS, payload: data});
        }catch(e){
            dispatch({type: TodoActionTypes.FETCH_ERROR, payload: "Error occurred when loading users"});
        }
    }
}