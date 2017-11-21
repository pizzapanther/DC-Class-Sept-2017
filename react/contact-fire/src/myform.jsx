import React, { Component } from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import database, {User} from './fsociety';
import './myform.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', color: 'blue'};
    this.history = props.history;
    this.check_login();
  }
  
  check_login() {
    console.log('Checking Login')
    if (User.user) {
      database.ref('contacts/' + User.user.uid)
        .on('value', function(contacts) {
          console.log(contacts.val());
        });
    } else {
      setTimeout(() => {
        this.check_login();
      }, 1000);
    }
    
    
  }
  
  update_state(event, key) {
    console.log(event.target);
    this.setState({[key]: event.target.value});
  }
  
  update_select = (event, index, value) => {
    this.setState({color: value});
  }
  
  handle_submit(event) {
    console.log('Submitted:' , this.state.name);
    event.preventDefault();
    
    database.ref('contacts/' + User.user.uid).set([
      {name: "Paul B"},
      {name: "Jim"},
      {name: "Jane"},
    ]);
    
    this.history.push("/");
  }
  
  render() {
    return (
      <div>
        <Card className="md-card">
          <form onSubmit={event => this.handle_submit(event)}>
            <CardTitle title="My Form" subtitle="subtitle"/>
            <CardText>
              <TextField floatingLabelText="Your Name"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
              <SelectField
                floatingLabelText="Color"
                value={this.state.color}
                onChange={this.update_select}
              >
                <MenuItem value="red" primaryText="Red" />
                <MenuItem value="blue" primaryText="Blue" />
              </SelectField>
            </CardText>
            <CardActions>
              <RaisedButton label="Submit" type="submit" primary={true}/>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  } 
}

export default MyForm;

