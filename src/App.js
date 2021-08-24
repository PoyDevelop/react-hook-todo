import React, { useState } from "react";
import TodoList from "./TodoList";
import Say from "./TodoList";




function App() {

  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");


  // const onTextChange = (e) => setInputText(e.target.value)
  const onTextChange = ({target: {value}}) => {
    console.log("value >>" , value);
    setInputText(value)
  }

  const addTask = () => {
    setTodoList([
      ...todoList,inputText
    ]);

    setInputText("");
  }

  const removeTask = (index) => {
    console.log("remove >>>", index);


    let todo = [...todoList];
    todo.splice(index, 1);
    setTodoList(todo);

  }


  return (
    <div className="App">
      <input type="text" value ={inputText} placeholder="ป้อนข้อมูล" onChange={onTextChange}/>
      <button type="button" onClick={addTask}>Save</button>

      <Say todoList={todoList} removeTask={removeTask}></Say>

    </div>
  );
}

export default App;
