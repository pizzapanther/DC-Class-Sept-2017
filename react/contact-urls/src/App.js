import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import {BrowserRouter, Route, Link, Switch, Redirect}
  from 'react-router-dom';

import MyForm from './myform';

const theme = getMuiTheme({
  palette: {primary1Color: red700}
});

const Home = () => (
  <h2>Home</h2>
)

const NoMatch = ({location}) => (
  //location = props.location;
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

class Article extends Component {
  constructor (props) {
    super(props);
    
    this.state = {id: props.match.params.id};
    
    // fetch article from you api
  }
  
  componentWillReceiveProps () {
    // fetch article from you api
  }
  
  render() {
    return (
      <div>
       <h3>Article: {this.state.id}</h3>
     </div>
    )
  }
}
// const Article = ({match}) => (
  
//   <div>
//     <h3>Article: {match.params.id}</h3>
//   </div>
// )

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <div>
            <AppBar title="Hello Class"/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/form">Add Form</Link></li>
            </ul>
            
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/form" component={MyForm}/>
              <Route path="/article/:id" component={Article}/>
              <Redirect from="/old-form" to="/form"/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
