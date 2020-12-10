import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App(){
//   return <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Learn React
//          </a>
//        </header>
//      </div>
// }

//props
// function Greeting(props) {
//   return <h1>Halo APPPP {props.name} - <Biodata age={props.age} /></h1>
// }

// function Biodata(props) { 
//   return <span>Umurnya {props.age}</span>
// }

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }

  //lifecycle
  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){
    // update set state time setiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }


  render(){
    return (
      <div>{this.state.time} Detik</div>
    )
  }
}

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p> */}
          
          {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        {/* <Greeting name="letnan" age="12"/>
        <Greeting name="johny" age="14"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* state */}
        <Timer start = "0" />
        <Timer start = "1" />
      </header>
    </div>
  );
}

export default App;
