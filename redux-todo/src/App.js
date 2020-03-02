import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import store from "./store/index";

function App() {
  return (
    <div>
      <Todo store={store} />
    </div>
  );
}

export default App;
