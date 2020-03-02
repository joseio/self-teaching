//By Jonathan: This contains redux store
import { createStore } from "redux";

const initialState = {
  count: 0
};

//Set initial state for first time reducer is run
const reducer = (state = initialState, action) => {
  console.log("reducer action", action);
  switch (action.type) {
    case "INCREMENT":
      //Return new state object w/ incremented count
      //B/c CANNOT directly modify state obj content
      return { count: state.count + 1 };
    case "DECREMENT":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
