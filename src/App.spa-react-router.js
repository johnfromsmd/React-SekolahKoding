// import { Component } from 'react';
// // import logo from './logo.svg';
// import {BrowserRouter, Route, Link, Router, Switch} from 'react-router-dom'
// import './App.css';

// function Home(){
//   return <h2>Halaman Home</h2>
// }

// function ListView(){
//   return (
//     <div>
//   <h2> Semua User</h2>
//   <ul>
//     <Link to="user/john">John</Link>
//     <div></div>
//     <Link to="user/doe">Doe</Link>
//   </ul>
//   </div>
//   )
// }

// function DetailView({match}){
//   return <h2> return Ini halaman {match.params.name}</h2>
// }

// function NoMatch(){
//   return <h2> Ini halaman Eroor</h2>
// }

//  class App extends Component{
//   render(){
//     return (    
//       <BrowserRouter>
//         <nav>
//           <li><Link to ="/"> Home </Link></li>
//           <li><Link to ="/users"> User </Link></li>

//         </nav>

//         <main>
//           <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/users" exact component={ListView} />
//           <Route path="/user/:name" exact component={DetailView} />

//           <Route component={NoMatch} />
//           </Switch>
//         </main>
//       </BrowserRouter>
//   );
//  }
// }

// export default App;
