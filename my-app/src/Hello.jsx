import React, { Component } from 'react';

class HelloMessage extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
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
  
  render () {
    return <div>
      <h1>Hello {this.props.name}</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  }
}

export default HelloMessage;
