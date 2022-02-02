import React, {FC, FormEvent, useState} from "react";
import './TodoItemAddForm.css';

interface TodoItemAddForm {
    addNewTaskInState: (text : string) => void,
}

const TodoItemAddForm: FC<TodoItemAddForm> = ({addNewTaskInState}) => {

    const [textForNewTask, setTextForNewTask] = useState('');

    const onSubmitTaskForm= (event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        addNewTaskInState(textForNewTask);
        setTextForNewTask('');

    }



    return (
        <section className="todoitem-add mx-auto mt-2">
            <form className="todoitem-add__form" onSubmit={onSubmitTaskForm}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="What else do you want to do?"
                    value={textForNewTask}
                    onChange={(e) => {setTextForNewTask(e.target.value)}}
                />
                <button type="submit" className="btn btn-outline-secondary ms-2 w-25">Add new task</button>
            </form>
        </section>
    );
}

export default TodoItemAddForm;
