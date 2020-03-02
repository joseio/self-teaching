import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import store from "./store/index";

function App() {
  return (
    <div className="App">
      <Search store={store} />
    </div>
  );
}

export default App;
