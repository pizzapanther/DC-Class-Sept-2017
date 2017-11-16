import React, { Component } from 'react';
import './Hello.css';

class HelloMessage extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      date: new Date(),
      selected: false
    };
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  handleClick(event) {
    console.log(event);
    console.log(this);
    
    if (this.state.selected) {
      this.state.selected = false;
    } else {
      this.state.selected = true;
    }
    
    this.props.callback(event, this.props.name, this.state.selected);
    this.setState({selected: this.state.selected});
  }
  
  render () {
    return <div className={this.state.selected ? 'selected' : 'not'}>
      <h1>Hello {this.props.name}</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      <button onClick={(e) => this.handleClick(e)}>
        toggle
      </button>
    </div>
  }
}

export default HelloMessage;
