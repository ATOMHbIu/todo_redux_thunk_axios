import {ITodoItem} from "../types/Todo";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {updateList} from "../store/action-creators/todo";
import {useState} from "react";

interface ITodoItemWithActions extends ITodoItem{
    fireDelete: ()=> void;
}

const ListItem = ({...props}:ITodoItemWithActions)=>{
    const {todos} = useTypedSelector(state=>state.todo);

    const [finished, setFinished] = useState<boolean>(props.completed); //used to rerender single item, w/o rerender whole store tree

    const finishItem =()=>{
        const updated = todos.map(e=>{
            if (e.id === props.id){
                e.completed=!e.completed;
            }
            return e;
        })
        updateList({...updated}); // update store w/o rerender
        setFinished(!finished); // update single item state, rerender only ones
    }

    return (
        <div className="list_item" style={finished ? {textDecoration:"line-through"}:{textDecoration:"none"}}>
            <div className="title"> {props.title}</div>
            <div className="userId"> {props.userId}</div>
            <div className="description">{props?.description}</div>
            <button className="button finish" onClick={()=>finishItem()}>{finished?"Не сделано":"Готово"}</button>
            <button className="button delete" onClick={()=>props.fireDelete()}>Удалить</button>
        </div>
    )
}

export default ListItem;