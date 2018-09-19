import React from 'react';
import styled from 'styled-components'

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

function App() {
  return (
    <AppWrapper>
      <TodoList>
        <TodoListH1>Todos</TodoListH1>
        <TodoListContainer>
          <TodoListItems>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" />Learn React</label>
            </div>
          </TodoListItems>
          <TodoListItems>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" />Learn Angular</label>
            </div>
          </TodoListItems>
          <TodoListItems>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" />Learn Nodejs</label>
            </div>
          </TodoListItems>
        </TodoListContainer>

      </TodoList>

    </AppWrapper>
  );
}

export default App;
