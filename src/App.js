import React,{Component} from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const data = [];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      lists: data
    }
  }

  addList = (name) => {
    const newList = {
      task: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      lists: [ newList, ...this.state.lists]
    })

  }

  cleanList = () =>{
    this.setState({
      lists: []
    })
  }





  render() {
    console.log(this.state.lists)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addList={this.addList} cleanList={this.cleanList}/>
        <TodoList lists={this.state.lists} />
      </div>
    );
  }
}

export default App;
