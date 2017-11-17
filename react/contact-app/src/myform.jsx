import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', color: 'blue'};
  }
  
  update_state(event, key) {
    console.log(event.target);
    this.setState({[key]: event.target.value});
  }
  
  handle_submit(event) {
    console.log('Submitted:' , this.state.name);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={event => this.handle_submit(event)}>
        <label>Your Name?</label>
        <input type="text" value={this.state.name} 
            onChange={event => this.update_state(event, 'name')}/>
        <hr/>
        <select value={this.state.color} 
            onChange={event => this.update_state(event, 'color')}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <hr/>
        <button type="submit">Submit</button>
      </form>
    );
  } 
}

export default MyForm;

