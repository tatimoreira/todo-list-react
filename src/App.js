import React, { Component } from 'react';
import styled, { isStyledComponent } from 'styled-components'
import TodoList from './TodoList/TodoList'

const AppWrapper = styled.div`
  background-color: #EEEEEE;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentItem: {text:'', key:''},
      
    };
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addTask = () => {
    console.log('Hello Add Item')
  }

  render() {
    return (
      <AppWrapper>
        <TodoList addTask={this.addTask} />
      </AppWrapper>

    );
  }

}

export default App;
