import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators, addToDo } from "../store";

function Home({ toDos, dispatch }) {
  const [text, setText] = useState("");

  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    setText("");
    dispatch(addToDo(text));
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
        <ul>{JSON.stringify(toDos)}</ul>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
