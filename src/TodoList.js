import React from "react";
import Todo from "./Todo";


const TodoList = ({ todoList }) => {

    return (
        <div>
            {
                todoList.map((todo, index) => {
                    return (

                        <Todo value={todo} key={index}></Todo>
                    )
                })
            }
        </div>
    )
}


export default TodoList;