import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


 class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      todoItem: '',
      items:[]
    }
  }


   handleSubmit = (event) => {
     event.preventDefault();
     console.log('terpanggil')
   }

   handleChange = (event) => {
     this.setState({
       todoItem: event.target.value
     })
     console.log(this.state.todoItem)
   }

  render(){
  return (
    
    <div>
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.todoItem} onChange={this.handleChange}/>
        <button>Add</button>
      </form>
    </div>
  );
 }
}

export default App;
