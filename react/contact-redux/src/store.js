import { createStore } from 'redux';
import contacts from './reducers';

var store = createStore(contacts);

export default store;
