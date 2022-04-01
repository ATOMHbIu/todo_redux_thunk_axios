export enum TodoActionTypes{
    UPDATE_ITEMS="UPDATE_ITEMS",
    FETCH_TODOS="FETCH_TODOS",
    FETCH_SUCCESS="FETCH_SUCCESS",
    FETCH_ERROR="FETCH ERROR"
}

export interface ITodoItem{
    id: number;
    userId: number;
    title: string;
    description?: string;
    completed: boolean;
}

export interface ITodoState{
    todos: ITodoItem[];
    loading: boolean;
    error: null | string;
}

interface UpdateItems{
    type: TodoActionTypes.UPDATE_ITEMS;
    payload: ITodoItem[];
}

interface IFetchItems{
    type: TodoActionTypes.FETCH_TODOS;
}

interface IFetchSuccess{
    type: TodoActionTypes.FETCH_SUCCESS;
    payload: ITodoItem[];
}

interface  IFetchError{
    type: TodoActionTypes.FETCH_ERROR;
    payload: string;
}

export type TodoAction = UpdateItems | IFetchItems | IFetchSuccess | IFetchError;

