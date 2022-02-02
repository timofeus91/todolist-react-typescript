import React, {FC} from "react";
import TodoItem from "../TodoItem/TodoItem";
import {todoListDefault} from "../../utils/constants";

const TodoList: FC = () => {
    return (
        <section className="todolist">
            <h2 className="todolist__title">Tasks for today</h2>
            <ul className="todolist-ul">
                {todoListDefault.map(item =>
                    <TodoItem
                        name={item.name}
                        key={item.id}
                    />
                )}
            </ul>
        </section>
    );
}

export default TodoList;
