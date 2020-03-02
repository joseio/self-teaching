import React, { Component } from "react";
import { connect } from "react-redux";

const Counter = props => {
  const { input, dispatch } = props;
  return (
    <React.Fragment>
      <h1>Google</h1>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onInput={event => {
          dispatch({ type: "INPUT_CHANGE", text: event.target.value });
        }}
      />
      <span>Searched: {input}</span>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { input: state.input };
};

export default connect(mapStateToProps)(Counter);
