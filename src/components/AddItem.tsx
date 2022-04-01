import React, {useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const AddItem = () => {

    const {todos} = useTypedSelector(state=> state.todo);
    const {updateList} = useActions();

    const [title, setTitle] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const addData = ()=>{
        updateList([...todos, {
            id: Date.now(),
            userId: Date.now(),
            title: title,
            description: description,
            completed: false
        }]);
        setTitle('');
        setName('');
        setDescription('');
    }
    return (
        <div className="add_item">
            <div className="creating_item">
                <label htmlFor="title">Заголовок:</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} name="title"/>
            </div>
            <div className="creating_item">
                <label htmlFor="name">Название задачи:</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="creating_item">
                <label htmlFor="description">Описание задачи:</label>
                <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <button onClick={()=>addData()}>Добавить</button>
        </div>
    );
};

export default AddItem;