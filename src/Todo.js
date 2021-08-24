import React from "react";

const Todo = ({ value,onClickRemove }) => {

    return (
        <div className="todoItem">{value}  
            <button onClick={onClickRemove}>X</button>
        </div>
    )

}

export default Todo