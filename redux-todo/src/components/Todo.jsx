import React, { Component } from "react";
import { connect } from "react-redux";

const Todo = props => {
  const { dispatch, list } = props; //Get dispatch built-in props (from redux store)
  return (
    <React.Fragment>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        //Detect when 'ENTER' key pressed
        onKeyDown={event => {
          if (event.key === "Enter") {
            dispatch({
              type: "ADD_ITEM",
              id: list.length, //ele id = length of the list
              text: event.target.value
            });
            event.target.value = ""; //Reset text bar
          }
        }}
      />

      {/* Need to wrap list elements in 'ul' */}
      <ul>
        {list.map(ele => (
          <li
            key={ele.id}
            onClick={() => {
              dispatch({ type: "REMOVE_ITEM", id: ele.id });
            }}
          >
            {ele.text}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

//Pass props to Todo component
const mapStateToProps = state => {
  return { list: state.list };
};

export default connect(mapStateToProps)(Todo);
