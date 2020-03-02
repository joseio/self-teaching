import React from "react";
import ReactDOM from "react-dom";

//const is basically same as let...but const is unmutable
//let is block-scoped, var is function-scoped

const element = <h1> Hello World </h1>;
console.log(element);
//Let Hello World appear as text on screen inside the 'root' element
//Got this 'root' from message on index.html, "You need to enable JavaScript to run this app."
ReactDOM.render(element, document.getElementById("root"));
