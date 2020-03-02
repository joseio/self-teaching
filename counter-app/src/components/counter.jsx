//Note: Using .jsx as opposed to .js gives me BETTER code completion!
import React, { Component } from "react";
//Create DOM component called 'Counter'

//Convert function to stateless functional component
const Counter = props => {
  //Obj destructuring for cleaner code
  const { counter, onIncrement, onDelete } = props;
  return (
    <div>
      <h1> {counter.value}</h1>
      <button
        //Call parent's ver. of onIncrement using parent's counter obj
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary bnt-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDelete(counter.id)} //Call prop's onDelete as func
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
