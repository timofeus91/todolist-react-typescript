import React, {FC} from "react";
import './TodoItem.css';
import ImportantIcon from "../../icons/ImportantIcon";
import DoneIcon from "../../icons/DoneIcon";
import DeleteIcon from "../../icons/DeleteIcon";

interface TodoItemInterface {
    name: string,
    onDelete: () => void,
    onToggleDone: () => void,
}



const TodoItem: FC<TodoItemInterface> = ({name,onDelete,onToggleDone}) => {
    return (
        <li className="todolist__item">
            <p className="todolist__subtitle" onClick={onToggleDone}>{name}</p>
            <div className="todolist__icon-container">
                <button type="button" className="btn btn-outline-success">
                    <ImportantIcon/>
                </button>

                <button type="button" className="btn btn-outline-primary ms-1" onClick={onToggleDone}>
                    <DoneIcon/>
                </button>

                <button type="button" className="btn btn-outline-danger ms-1" onClick={onDelete}>
                    <DeleteIcon/>
                </button>
            </div>

        </li>
    );
}

export default TodoItem;
