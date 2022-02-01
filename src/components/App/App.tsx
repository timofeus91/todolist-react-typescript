import React from 'react';
import './App.css';
import Info from "../Info/Info";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import TodoItemAddForm from "../TodoItemAddForm/TodoItemAddForm";


function App() {

    return (
        <main className="main">
            <Info/>
            <SearchPanel/>
            <TodoList/>
            <TodoItemAddForm/>
        </main>
    );
}

export default App;
