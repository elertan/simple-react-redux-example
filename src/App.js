import React, { Component } from 'react';
import {connect} from "react-redux";
import {actionsCreator} from "./store/NumberStore";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple React Redux Example</h1>
        <p>List of random numbers:</p>
        <ul>
          {/* Number state is accessible here due to it being exposed by the connect function */}
          {this.props.numberState.length === 0 ?
            <span>There aren't any numbers added to the list yet.</span>
            :
            this.props.numberState.map((number, i) => (
              <li key={i}>{number}</li>
            ))
          }
        </ul>
        {/* The button's onClick handler invokes a function that calls the created function which was made by the actionCreator, showing off the use of a parameter */}
        <button onClick={() => this.props.numberActions.addNumber(Math.random())}>Click me to add a random number to the list!</button>
      </div>
    );
  }
}

// Connects this component to a redux store
export default connect(
  // This first function takes in the entire store, which could consist
  // of many different stores, in our case we only have on store,
  // which is the number store. We map the state of this store to
  // a property called 'numberState' which will be accessible on the
  // components props
  appState => ({
    numberState: appState.number
  }),
  // The second function takes in the dispatch function, which
  // can be used to send out actions which the reducers will pick up
  // to potentially modify the state.
  // In our case we pass the dispatch function to another function we made
  // to create easily usable functions from within our component.
  // So we easily send out an 'ADD_NUMBER' action without having to write the entire
  // dispatch call here again.
  dispatch => ({
    numberActions: actionsCreator(dispatch)
  })
)(App);
