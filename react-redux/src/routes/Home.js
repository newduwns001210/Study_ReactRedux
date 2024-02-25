import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../store";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    console.log(text);
    dispatch(addToDo(text));
    setText("");
  }
  const onDelete = (event) => {
    const id = event.target.id;
    dispatch(deleteToDo(id));
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map((item) => (
          <div key={item.id}>
            <li>{item.text} </li>
            <button id={item.id} onClick={onDelete}>
              DEL
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
