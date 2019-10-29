import React,{Component} from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css'


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

  checkedOrNot = (id) => {
    this.setState({
      lists: this.state.lists.map(check => {
        if(check.id === id){
          return{
            ...check,
            completed: !check.completed
          }
        }else{
          return check;
        }
      })
    })
  }

  cleanCheckIteam = () => {
    this.setState({
      lists: this.state.lists.filter(iteam => !iteam.completed)
    })
  }

  


  render() {
    console.log(this.state.lists)
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addList={this.addList}
          cleanList={this.cleanList} 
          cleanCheckIteam={this.cleanCheckIteam}
        />
        <TodoList 
          lists={this.state.lists} 
          checkedOrNot={this.checkedOrNot}
        />
        <button className='danger' onClick={this.cleanList}>Clean list</button>
      </div>
    );
  }
}

export default App;
