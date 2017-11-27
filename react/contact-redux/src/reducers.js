import { combineReducers } from 'redux';

// var initialState = {
//   contacts: [],
//   visibilityFilter: 'SHOW_ALL'
// };

function contacts (state = [], action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      // 1. Copy the sate
      let new_state = Object.assign({}, state, {contacts: []});
      state.contacts.forEach((old, index) => {
        let new_contact = Object.assign({}, old);
        new_state.contacts.push(new_contact);
      });
      
      // 2. Modify new state
      new_state.contacts.push(action.data);
      
      // 3. return new state
      return new_state;
      
    case 'UPDATE_ATTR':
      // let new_state = Object.assign({}, state, {contacts: []});
      // state.contacts.forEach((old_contact, index) => {
      //   let new_contact = Object.assign({}, old_contact);
      //   new_state.contacts.push(new_contact);
      // });
      
      var new_state = Object.assign(
          {}, state, {contact: [...state.contacts]});
      
      new_state.contacts[action.index][action.key] = action.value;
      
      console.log(new_state);
      return new_state;
      
    default:
      return state;
  }
  
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}
const contactApp = combineReducers({
  visibilityFilter,
  contacts
})

export default contactApp;
