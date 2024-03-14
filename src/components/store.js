
import { legacy_createStore } from 'redux';
import rootReducer from './rootReducer'; // Check the correct path

const store = legacy_createStore(rootReducer);

export default store;
