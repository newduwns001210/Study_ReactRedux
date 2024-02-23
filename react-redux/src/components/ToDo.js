import React from "react";

function ToDo({ text, id }) {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  );
}

export default ToDo;
