// Single file to manage a store
// This store just stores an array of numbers
// in other cases you might want a more complex data type
// in that case, you could use an object instead of the array
// we're showing of right here

// Define action names (mostly to prevent misspelling the names, and it's also more efficient!)
const actionNames = {
  ADD_NUMBER: "ADD_NUMBER"
};

// Use this to easily create the functions for this store, by giving the dispatch to this function
// this is explained a bit more on the connect in App.js
export const actionsCreator = (dispatch) => ({
  addNumber: (number) => {
    dispatch({
      type: actionNames.ADD_NUMBER,
      number
    })
  }
});

// In case this is the first time coming through this reducer
// we should have a base line to work with
// so if the state is undefined, we use an empty array instead
const initialState = [];
// A reducer takes in the current state, and the action send by dispatch
export const reducer = (state = initialState, action) => {
  // We switch on the action's type
  // so we can handle each action differently
  switch (action.type) {
    // If dispatch is called with type: ADD_NUMBER
    case actionNames.ADD_NUMBER:
      // Create a new array with the current array's content, plus the number passed on the action
      return [
        ...state,
        action.number
      ];
      // In case we didn't match the action, just ignore it, and do not modify the state.
    default:
      return state;
  }
};