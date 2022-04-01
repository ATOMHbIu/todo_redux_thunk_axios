import ListItem from "./ListItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useEffect} from "react";

const TodoList=()=>{

    const {todos, loading, error} = useTypedSelector(state=> state.todo);
    const {updateList, fetchTodos} = useActions();

    useEffect(()=>{
        fetchTodos()
    },[])

    const updateDelete = (id: number)=>{
        const updated = todos.filter(e=>e.id!==id);
        updateList([...updated]);
    }

    if(loading){
        return(<>
            Loading items...
        </>)
    }

    if(error){
        return(
            <>{error}</>
        )
    }

    return(
        <div className="todo_list">
            {!loading&&todos.map((e)=> (
                    <ListItem
                        key={e.id} {...e}
                        fireDelete={()=>updateDelete(e.id)}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;