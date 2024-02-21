import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }

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
        <ul>{JSON.stringify(toDo)}</ul>
      </form>
    </div>
  );
}

export default Home;
