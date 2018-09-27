import React, { Component } from 'react';
import styled, { isStyledComponent } from 'styled-components'


const AppWrapper = styled.div`
  background-color: #EEEEEE;
`
const TodosWrapper = styled.div`
  background-color: #FFF;
  padding: 20px 20px 10px 20px;
  width: 639px;
  margin: 30px auto;
`
const TodosTittle = styled.h1`
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
const NewTask = styled.input`
  width: 514px;
  height: 29px;
  margin-right: 20px;
  font-size: 1.4em;
  vertical-align: top;
  margin-bottom: 10px;
`
const AddTaskButton = styled.button`
  height: 36px;
  font-size: 1.1em;
  vertical-align: top;
  border: solid 1px #999;
  border-radius: 2px;
`
const url = "http://localhost:3000/tasks";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: ""
        };
    }


    componentDidMount() {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ tasks: data });
            })

    }

    onChange = (event) => {
        this.setState({ newTask: event.target.value });
    }


    onSubmit = (event) => {
        event.preventDefault();
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: this.state.newTask
            })
        })
            .then(resp => resp.json())
            .then((data) =>
                this.setState({
                    newTask: "",
                    tasks: [...this.state.tasks, data]
                })
            )
            .catch((err) => console.log(err))
    }


    render() {
        return (
            <TodosWrapper>
                <TodosTittle>Todos</TodosTittle>
                <form className="form" onSubmit={this.onSubmit}>
                    <NewTask value={this.state.newTask} onChange={this.onChange} />
                    <AddTaskButton >Add task</AddTaskButton>
                </form>
                <TodoListContainer>
                    {
                        this.state.tasks.map((task, index) =>
                            <TodoListItems key={index}>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="" />{task.text}</label>
                                </div>
                            </TodoListItems>)
                    }
                </TodoListContainer>
            </TodosWrapper>
        );
    }

}

export default TodoList;
