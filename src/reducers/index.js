import { addUserToStore, addTripToStore } from "../actions/actions";
import { addUserToStoreReducer, addTripToStoreReducer } from "./reducers";

const initialState = {
    user: [],
    trips: []
};

let reducers = {
    [addUserToStore]: addUserToStoreReducer,
    [addTripToStore]: addTripToStoreReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
    let miniReducer = reducers[action.type];
    miniReducer = miniReducer || fallbackReducer;
    let newState = miniReducer(state, action);
    return newState;
};

export default reducer;