export let addUserToStoreReducer = (state, action) => ({
    ...state,
    user: action.payload
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

export let loadTripsToStoreReducer = (state, action) => ({
    ...state,
    trips: action.payload
});

export let clearStoreReducer = (state, action) => ({
    ...state,
    user: {},
    trips: []
});