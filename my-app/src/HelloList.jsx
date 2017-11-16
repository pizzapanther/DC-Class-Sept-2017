import React, { Component } from 'react';
import HelloMessage from './Hello';

class HelloList extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      date: new Date(),
      people: [
        {id: 1, name: 'Paul'},
        {id: 2, name: "Paulette"}
      ]
    }
  }
  
  handleClick (event, person, selected) {
    console.log('Parent', person, selected);
  }
  
  render () {
    return <ul>
      {this.state.people.map((person) => 
        <li key={person.id}>
          <HelloMessage name={person.name} callback={this.handleClick}/>
        </li>
      )}
    </ul>
  }
}

export default HelloList;
