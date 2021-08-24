import React from "react";
import Todo from "./Todo";


const TodoList = ({ todoList, removeTask }) => {

    return (
        <div>
            {
                todoList.map((todo, index) => {
                    return (

                        <Todo value={todo} key={index} onClickRemove={() => removeTask(index)} ></Todo>
                    )
                })
            }
        </div>
    )
}


export default TodoList;