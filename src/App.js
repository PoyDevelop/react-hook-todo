import React, { useState } from "react";
import TodoList from "./TodoList";
import Say from "./TodoList";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";


const border = css`
  ${props => {
    return `
      border: 1px solid #000;
      border-radius: 8px;
      `;
  }
  }
`;

const MainSection = styled.section`
background: #a5b7f2;
padding : 20px;


input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 8px;
}
`;
const MainBtn = styled.button`
  min-width: 150px;
  height: 35px;
  padding: 10px;
  background: #CCC;
  margin-bottom: 5px;
  margin-right: 5px;

  ${props => props.success && `
    background: #5fde96;
  `}

  ${border};

`;

function App() {

  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");

  // const onTextChange = (e) => setInputText(e.target.value)
  const onTextChange = ({ target: { value } }) => {
    console.log("value >>", value);
    setInputText(value)
  }

  const addTask = () => {
    setTodoList([
      ...todoList, inputText
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
    <MainSection className="App">
      <input type="text" value={inputText} placeholder="ป้อนข้อมูล" onChange={onTextChange} />
      <MainBtn type="button" onClick={addTask}>Save</MainBtn>
      <MainBtn success onClick={addTask}>Save</MainBtn>

      <Say todoList={todoList} removeTask={removeTask}></Say>


    </MainSection>
  );
}

export default App;
