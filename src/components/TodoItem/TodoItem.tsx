import React, {FC} from "react";
import './TodoItem.css';
import ImportantIcon from "../../icons/ImportantIcon";
import DoneIcon from "../../icons/DoneIcon";
import DeleteIcon from "../../icons/DeleteIcon";

interface TodoItemInterface {
    name: string,

}

const TodoItem: FC<TodoItemInterface> = ({name}) => {
    return (
        <li className="todolist__item">
            <p className="todolist__subtitle">{name}</p>
            <div className="todolist__icon-container">
                <button type="button" className="btn btn-outline-success">
                    <ImportantIcon/>
                </button>

                <button type="button" className="btn btn-outline-primary ms-1">
                    <DoneIcon/>
                </button>

                <button type="button" className="btn btn-outline-danger ms-1">
                    <DeleteIcon/>
                </button>
            </div>

        </li>
    );
}

export default TodoItem;
