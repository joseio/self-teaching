import { createStore } from "redux";

const initState = {
  list: [{ id: 0, text: "Jonny" }]
};

const store = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { list: [...state.list, { id: action.id, text: action.text }] };
    case "REMOVE_ITEM":
      return { list: state.list.filter(ele => ele.id != action.id) };
    default:
      return state;
  }
};

export default createStore(store);
