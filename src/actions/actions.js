const ADD_USER_TO_STORE = 'ADD_USER_TO_STORE';

export let addUserToStore = (user) => ({
    type: ADD_USER_TO_STORE,
    payload: user
});

addUserToStore.toString = () => ADD_USER_TO_STORE;