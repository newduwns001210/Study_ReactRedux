# Redux with Redux

**Provider**

- React Redux에선 Provider컴포넌트를 통해 앱의 다른 컴포넌트에서 Redux store를 사용할 수 있다.

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

```

<br>

**Connect**

- Component들을 Store에 연결시켜줌.
- **Connect는 2개의 argument를 가짐. 내가 dispatch를 해서 action을 보내고 싶느냐, getState를 하여 state를 가져오고 싶느냐에 따라서. (state or dispatch)**
- store로부터 state를 가져다 주는 역할을 하게 됨.
- 이러한 function을 mapStateTOProps라고 부름. (두개의 argument와 함께 호출 되는데 하나는 store로부터 가져온 state와 다른 하나는 component의 props)
- 또한, connect()는 Component로 보내는 props에 추가할 수 있도록 허용해줌.
- **_근데 요즘 이거 안씀. useSelector 사용함._**

<br>

**useSelector**

- 기본적으로 connect와 같은 역할을 함.
- 하지만 connect()에 비해 코드가 훨씬 간편함.

<br>

**코드 비교(connect)**

```
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");

  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
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
        <ul>{JSON.stringify(toDos)}</ul>
      </form>
    </div>
  );
}

function getCurrentState(state) {
  return { toDos: state };
}

export default connect(getCurrentState)(Home);
```

<br>

**코드 비교(useSelector)**

```
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
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
```
