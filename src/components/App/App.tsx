import React, {useState} from 'react';
import './App.css';
import Info from "../Info/Info";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import TodoItemAddForm from "../TodoItemAddForm/TodoItemAddForm";


function App() {
    const [infoObject, setInfoObject] = useState({inWork: '3', done: '0'})

    return (
        <main className="content w-50 mx-auto">
            <Info
            inWork={infoObject.inWork}
            done={infoObject.done}/>
            <SearchPanel/>
            <TodoList/>
            <TodoItemAddForm/>
        </main>
    );
}

export default App;
