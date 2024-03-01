// // rootReducer.js (or wherever your Redux setup is)
// import { combineReducers } from 'redux';
// import cartReducer from './cartReducer';

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   // Add other reducers if needed
// });

// export default rootReducer;

// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // ... other reducers
});

export default rootReducer;
