export let addUserToStoreReducer = (state, action) => ({
    ...state,
    user: state.user.concat(action.payload)
});

export let addTripToStoreReducer = (state, action) => ({
    ...state,
    trips: state.trips.concat(action.payload)
});

export let updateTripToStoreReducer = (state, action) => {
    return {
        ...state,
        trips: state.trips.map((trip) => trip.name === action.payload.name ? action.payload : trip)
    };
};