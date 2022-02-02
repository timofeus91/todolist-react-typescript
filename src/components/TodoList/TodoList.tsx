import React, {FC} from "react";
import TodoItem from "../TodoItem/TodoItem";
import {todoListDefault} from "../../utils/constants";
import './TodoList.css';


const TodoList: FC = () => {
    return (
        <section className="todolist">
            <h2 className="todolist__title">Tasks for today</h2>
            <ul className="todolist-ul">
                {todoListDefault.map(item =>
                    <TodoItem
                        name={item.subtitle}
                        key={item.id}
                    />
                )}
            </ul>
        </section>
    );
}

export default TodoList;
