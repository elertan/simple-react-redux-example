import {combineReducers, createStore} from "redux";
import {
  reducer as numberReducer
} from "./NumberStore";

// Create a named object containing all reducers that should be used
const reducers = {
  number: numberReducer
};

// Use the given function from redux to create a single big reducer for use
const allReducers = combineReducers(reducers);
// Create the store with all contained reducers
const store = createStore(allReducers);
// Expose to other files
export default store;
