export let addUserToStoreReducer = (state, action) => ({
  ...state,
  user: state.user.concat(action.payload)
});