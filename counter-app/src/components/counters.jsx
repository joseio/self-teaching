//Below is file I made for single counter component
import Counter from "./counter";
import React, { Component } from "react";

//Changed class to stateless functional component since it only had a render() method
const Counters = props => {
  //Obj destructuring so I don't have to put 'this.props' before each of these properties
  // Obj destructuring = extract properties from props obj I'm looking at
  const { onReset, counters, onDelete, onIncrement } = props;
  return (
    <div>
      <span> Items in cart: {}</span>
      <button className="btn btn-dark" onClick={onReset}>
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          onDelete={onDelete} //pass handler func as prop
          onIncrement={onIncrement}
          counter={counter} //pass counter object (more modularity)
        />
        //map each obj in counters to Counter component
        //Send 'value' and 'selected' props to Counter component (key is private identification...but value and id are props)
        //Note: props = READ-ONLY
      ))}
    </div>
  );
};

export default Counters;
