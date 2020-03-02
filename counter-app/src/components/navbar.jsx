import React, { Component } from "react";

//Note: When all a class has is a render...you can safely conv to 'stateless functional component'

//CANNOT use 'this.props' in stateless functional component...
// -> need to put 'props' arg. React AUTO passes props FOR ME, so I don't have to pass it from other class
//Obj destructuring => get PROPERTIES of props object I'm looking at
const Navbar = ({ counters }) => {
  return (
    //Count only items that have value > 0
    <nav className="navbar navbar-light bg-light">
      {/* <span className="navbar-brand mb-0 h1"> Cart</span> */}
      <button className="btn btn-warning btn-sm">
        Cart
        <span className="badge badge-light m-2">
          {counters.filter(counter => counter.value > 0).length}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
