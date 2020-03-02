import React, { Component } from "react";
import { connect } from "react-redux";

//Stateless functional component

//Also could've done "const Counter = ({count, dispatch}) => {"
const Counter = props => {
  //Obj destructuring to get built in 'dispatch' prop resulting from having redux store
  const { count, dispatch } = props;
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        className="btn btn-primary"
        //Next line is shortcut for mapDispatchToProps
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

//Input = state returned from reducer
//mapStateToProps is run ANYTIME the store modifies state
const mapStateToProps = state => {
  console.log("STATE TO PROPS", state);
  //Set props.count = state.count so that Counter component can read later from props.count
  return {
    count: state.count
  };
};

//mapDispatchToProps run ONCE in beginning to est. button handlers
//onIncrementClick and onDecrementClick get mapped ONCE during init and are called as needed afterwards
//Below is old, long way of doing dispatching...

// const mapDispatchToProps = dispatch => {
//   //Add 'onIncrementClick' property to props via store
//   console.log("DISPATCH TO PROPS", dispatch);
//   return {
//     onIncrementClick: () => {
//       //Redux actions are objs... NEED 'type' property
//       const action = { type: "INCREMENT" }; //CREATE action
//       dispatch(action); //DISPATCH action to store to update state
//     },
//     onDecrementClick: () => {
//       dispatch({ type: "DECREMENT" });
//     }
//   };
// };

//Creates NEW component which hooks mapStateToProps to my Counter component
//Basically creates wrapper around my Counter component
export default connect(mapStateToProps)(Counter);

//According to Redux docs, NOT specifying mapDispatchToProps as 2nd arg
//...means that Component auto inherets dispatch as property in PROPS
