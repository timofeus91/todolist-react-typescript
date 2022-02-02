import React, {FC} from "react";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css';
import {TodoItemInterface} from "../../utils/constants";

interface TodoListInterface {
    todoListArray: TodoItemInterface[],
    onDelete: (value : number) => void,
    onToggleDone: (value : number) => void,
}

const TodoList: FC<TodoListInterface> = ({todoListArray,onDelete,onToggleDone}) => {
    return (
        <section className="todolist">
            <h2 className="todolist__title">Tasks for today</h2>
            <ul className="todolist-ul">
                {todoListArray.map(item => {
                        const id = item.id;
                        return (<TodoItem
                            name={item.subtitle}
                            key={item.id}

                            onDelete={() => {
                                onDelete(id)}
                            }
                            onToggleDone={() => {
                                onToggleDone(id)}
                            }
                        />)
                    }
                )}
            </ul>
        </section>
    );
}

export default TodoList;
