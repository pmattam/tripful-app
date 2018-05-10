import ADD_USER_TO_STORE from "../constants/constants";

export let addUserToStore = (user) => ({
  type: ADD_USER_TO_STORE,
  payload: user
});

addUserToStore.toString = () => ADD_USER_TO_STORE;