const ADD_USER_TO_STORE = 'ADD_USER_TO_STORE';
const ADD_TRIP_TO_STORE = 'ADD_TRIP_TO_STORE';
const UPDATE_TRIP_TO_STORE = 'UPDATE_TRIP_TO_STORE';
const LOAD_TRIPS_TO_STORE = 'LOAD_TRIPS_TO_STORE';
const CLEAR_STORE = 'CLEAR_STORE';

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

export let updateTripToStore = (trip) => ({
    type: UPDATE_TRIP_TO_STORE,
    payload: trip
});

updateTripToStore.toString = () => UPDATE_TRIP_TO_STORE;

export let loadTripsToStore = (trips) => ({
    type: LOAD_TRIPS_TO_STORE,
    payload: trips
});

loadTripsToStore.toString = () => LOAD_TRIPS_TO_STORE;

export let clearStore = () => ({
    type: CLEAR_STORE,
    payload: {}
});

clearStore.toString = () => CLEAR_STORE;