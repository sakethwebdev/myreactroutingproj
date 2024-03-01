// import {legacy_createStore} from "redux";
// import rootReducers from "./index1";

// const store = legacy_createStore(rootReducers);

// export default store;


// store.js
import { legacy_createStore } from 'redux';
import rootReducer from './rootReducer'; // Check the correct path

const store = legacy_createStore(rootReducer);

export default store;
