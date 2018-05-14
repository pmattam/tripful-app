const ADD_USER_TO_STORE = 'ADD_USER_TO_STORE';
const ADD_TRIP_TO_STORE = 'ADD_TRIP_TO_STORE';

export let addUserToStore = (user) => ({
    type: ADD_USER_TO_STORE,
    payload: user
});

addUserToStore.toString = () => ADD_USER_TO_STORE;

export let addTripToStore = (trip) => ({
    type: ADD_TRIP_TO_STORE,
    payload: trip
});

addTripToStore.toString = () => ADD_TRIP_TO_STORE;