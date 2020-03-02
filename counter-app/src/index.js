import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//Bootstrap: Gives apps a more modern look
import "bootstrap/dist/css/bootstrap.css";
//Below is file I made
// import Counters from "./components/counters";

//Orig line:
//ReactDOM.render(<App />, document.getElementById("root"));
//Expand DOM vocab below w/ 'Counter that I made
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
