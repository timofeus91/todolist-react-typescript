import React, {useEffect, useState} from 'react';
import './App.css';
import Info from "../Info/Info";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import TodoItemAddForm from "../TodoItemAddForm/TodoItemAddForm";
import {TodoItemInterface, todoListDefault} from "../../utils/constants";


function App() {
    const [infoObject, setInfoObject] = useState({inWork: '3', done: '0'});
    const [todoListStateArray, setTodoListStateArray] = useState(todoListDefault);


    function getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const addNewTask = (subtitle: string) => {
        return {
            id: getRandomArbitrary(10, 100),
            subtitle,
            important: false,
            done: false
        }
    }

    const addNewTaskInState = (subtitle: string) => {
        setTodoListStateArray((todoListStateArray) => {
            const newTask = addNewTask(subtitle);
            return [...todoListStateArray, newTask]
        })

    }

    useEffect(() => {
        console.log(todoListStateArray)
    }, [todoListStateArray])

    const deleteTaskFromState = (id: number) => {
        setTodoListStateArray((todoListStateArray) => {
            const newArray = todoListStateArray.filter(item => item.id !== id);
            return newArray
        })
    }
    const generalToggle = (arr: TodoItemInterface[], id: number, propertyName: keyof TodoItemInterface) => {
        const idx = arr.findIndex((item) => item.id === id);
        const oldItem = arr[idx];
        const value = !oldItem[propertyName];

        const item = {...arr[idx], [propertyName]: value};
        return [
            ...arr.slice(0, idx),
            item,
            ...arr.slice(idx + 1)
        ];

    };

    const onToggleDone = (id: number) => {

    }
    return (
        <main className="content w-50 mx-auto">
            <Info
                inWork={infoObject.inWork}
                done={infoObject.done}/>
            <SearchPanel/>
            <TodoList
                onToggleDone={onToggleDone}
                onDelete={deleteTaskFromState}
                todoListArray={todoListStateArray}/>
            <TodoItemAddForm addNewTaskInState={addNewTaskInState}/>
        </main>
    );
}

export default App;
