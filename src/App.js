import React,{ Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter, Route, Link, Router, Switch} from 'react-router-dom'
import './App.css';



 class App extends Component{
  render(){
    return (
      <table>
        <tr>
          <Column />
        </tr>
      </table>    
  );
 }
}

class Column extends React.Component {
  render () {
    return (
      <React.Fragment>

        <td>1</td>
        <td>2</td>
      
      </React.Fragment>
    );
  }
}

export default App;
