import React, {FC} from "react";
import './TodoItem.css';

interface TodoItemInterface {
    name: string,

}

const TodoItem: FC<TodoItemInterface> = ({name}) => {
    return (
        <li className="todolist__item">
            <p className="todolist__subtitle">{name}</p>
            <button type="button" className="todolist__important-button"></button>
            <button type="button" className="todolist__done-button"></button>
            <button type="button" className="todolist__delete-button"></button>
        </li>
    );
}

export default TodoItem;
