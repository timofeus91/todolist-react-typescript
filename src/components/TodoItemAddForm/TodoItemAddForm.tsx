import React, {FC} from "react";

const TodoItemAddForm: FC = () => {
    return (
        <section className="todoitem-add">
            <form className="todoitem-add__form">
                <input type="text" className="todoitem-add__input" placeholder="What else do you want to do?" />
                <button type="submit" className="todoitem-add__submit">Add new task</button>
            </form>
        </section>
    );
}

export default TodoItemAddForm;
