import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Info from "../Info/Info";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import TodoItemAddForm from "../TodoItemAddForm/TodoItemAddForm";
import {TodoItemInterface, todoListDefault} from "../../utils/constants";


function App() {
    const [infoSearchObject, setInfoSearchObject] = useState({inWork: '', done: '', filter: 'all'});
    const [todoListStateArray, setTodoListStateArray] = useState<TodoItemInterface[] | []>(todoListDefault);
    const [visibleTodoListItems, setVisibleTodoListItems] = useState<TodoItemInterface[] | []>(todoListDefault);
    const [textForSearch, setTextForSearch] = useState('');


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

    const filterItems = (arr: TodoItemInterface[], filter: string): TodoItemInterface[] => {
        if (filter === 'all') {
            return arr;
        } else if (filter === 'active') {
            return arr.filter((item) => (!item.done));
        } else if (filter === 'done') {
            return arr.filter((item) => item.done);
        }
        return arr;

    };

    const searchInputFilter = (arr: TodoItemInterface[], search: string) => {
        if (search.length === 0) {
            return arr;
        }

        return arr.filter((item) => {
            return item.subtitle.toLowerCase().includes(search.toLowerCase());
        });
    }

    useEffect(() => {
        const newArray = searchInputFilter(filterItems(todoListStateArray, infoSearchObject.filter), textForSearch);

        setVisibleTodoListItems(newArray);


    }, [infoSearchObject, todoListStateArray, textForSearch])

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

        let result = [...arr];
        result.splice(idx, 1, item);

        setTodoListStateArray(result);

    };

    const onToggleDone = (id: number) => {
        generalToggle(todoListStateArray, id, 'done');
    }

    const onToggleImportant = (id: number) => {
        generalToggle(todoListStateArray, id, 'important');
    }

    const onFilter = (name: string) => {
        setInfoSearchObject({...infoSearchObject, filter: name});

    }

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setTextForSearch(e.target.value);
    }


    return (
        <main className="content w-50 mx-auto">
            <Info
                inWork={infoSearchObject.inWork}
                done={infoSearchObject.done}/>
            <SearchPanel
                textForSearch={textForSearch}
                handleChange={handleChangeSearch}
                filter={infoSearchObject.filter}
                onFilter={onFilter}/>
            <TodoList
                onToggleDone={onToggleDone}
                onToggleImportant={onToggleImportant}
                onDelete={deleteTaskFromState}
                todoListArray={visibleTodoListItems}/>
            <TodoItemAddForm addNewTaskInState={addNewTaskInState}/>
        </main>
    );
}

export default App;
