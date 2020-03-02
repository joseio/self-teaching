import { createStore } from "redux";

const initState = {
  input: ""
};

//reducers take in curr state and action taken
const reducer = (state = initState, action) => {
  console.log("inside reducer");

  switch (action.type) {
    case "INPUT_CHANGE":
      console.log(action);
      return { input: action.text };
    default:
      return state;
  }
};

export default createStore(reducer);
