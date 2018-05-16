import { addUserToStore, addTripToStore, updateTripToStore, loadTripsToStore, clearStore } from "../actions/actions";
import { addUserToStoreReducer, addTripToStoreReducer, updateTripToStoreReducer, loadTripsToStoreReducer, clearStoreReducer } from "./reducers";

const initialState = {
    user: {},
    trips: []
};

let reducers = {
    [addUserToStore]: addUserToStoreReducer,
    [addTripToStore]: addTripToStoreReducer,
    [updateTripToStore]: updateTripToStoreReducer,
    [loadTripsToStore]: loadTripsToStoreReducer,
    [clearStore]: clearStoreReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
    let miniReducer = reducers[action.type];
    miniReducer = miniReducer || fallbackReducer;
    let newState = miniReducer(state, action);
    return newState;
};

export default reducer;