import React, { Component } from 'react';
import styled, { isStyledComponent } from 'styled-components'

const AppWrapper = styled.div`
  background-color: #EEEEEE;
`
const TodoList = styled.div`
  background-color: #FFF;
  padding: 20px 20px 10px 20px;
  width: 600px;
  margin: 30px auto;
`
const TodoListH1 = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
  color : #824C71;
`
const TodoListItems = styled.li`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em 0.2em 0;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`
const TodoListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/tasks";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let posts = data.map((task, index) => {
          return (
            <TodoListItems>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />{task.text}</label>
              </div>
            </TodoListItems>

          )
        })
        this.setState({ posts: posts });
      })
  }
  render() {
    return (
      <AppWrapper>
        <TodoList>
          <TodoListH1>Todos</TodoListH1>
          <TodoListContainer>
            <div className="App">
              {this.state.posts}
            </div>
          </TodoListContainer>
        </TodoList>
      </AppWrapper>

    );
  }

}

export default App;
