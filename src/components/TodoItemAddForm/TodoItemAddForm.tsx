import React, {FC} from "react";
import './TodoItemAddForm.css';

const TodoItemAddForm: FC = () => {
    return (
        <section className="todoitem-add mx-auto mt-2">
            <form className="todoitem-add__form">
                <input type="text" className="form-control" placeholder="What else do you want to do?" />
                <button type="submit" className="btn btn-outline-secondary ms-2 w-25">Add new task</button>
            </form>
        </section>
    );
}

export default TodoItemAddForm;
