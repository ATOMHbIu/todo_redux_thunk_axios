import React from 'react';
import './app.css';
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

function App() {

    return (
        <div className="App">
            <TodoList />
            <AddItem />
        </div>
    );
}

export default App;
