import logo from './logo.svg';
import './App.css';

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

function Greeting(props) {
  return <h1>Halo APPPP {props.name} - <Biodata age={props.age} /></h1>
}

function Biodata(props) { 
  return <span>Umurnya {props.age}</span>
}

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p> */}
          
          {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        <Greeting name="letnan" age="12"/>
        <Greeting name="johny" age="14"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
