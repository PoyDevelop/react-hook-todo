import React, { useState } from "react";
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

  return (
    <div className="App">
      <input type="text" value ={inputText} placeholder="ป้อนข้อมูล" onChange={onTextChange}/>
      <button type="button" onClick={addTask}>Save</button>

      <Say todoList={todoList} ></Say>

    </div>
  );
}

export default App;
