import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
