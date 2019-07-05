const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter : "WOW, this redux works!"
}

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const store = createStore(rootReducer);
console.log("store.getState", store.getState());


// Dispatching Action

// Subscription