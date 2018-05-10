import { addUserToStore } from "../actions/actions";
import { addUserToStoreReducer } from "./reducers";

const initialState = {
  user: [],
  isLoggedIn: false
};

let reducers = {
  [addUserToStore]: addUserToStoreReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
  let miniReducer = reducers[action.type];
  miniReducer = miniReducer || fallbackReducer;
  let newState = miniReducer(state, action);
  return newState;
};

export default reducer;
