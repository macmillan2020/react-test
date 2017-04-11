import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			todo: "Add task here!"
		}
		this.clearField = this.clearField.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}
	clearField(){
		this.setState({
			todo: ""
		})
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	addTodo(e){
		e.preventDefault();
		const todoState = Array.from(this.state.todos);
		if (this.state.todo === "") {
			alert("Please enter a task 📝")
		} else {
			todoState.push(this.state.todo);
			console.log(this.state.todo);
			this.setState({
				todos : todoState,
				todo : ""
			});
		}
	}
	removeTodo(index) {
		console.log(index)
		const todoState = Array.from(this.state.todos);
		todoState.splice(index, 1);
		this.setState({
			todos: todoState
		});
	}
	render() {
		return (
			<div>
				<header>
					<h1>To Do List</h1>
				</header>
				<form onSubmit={this.addTodo}>
					<input type="text" name="todo" value={this.state.todo} onClick={this.clearField} onChange={this.handleChange}/>
					<button className="add-item-btn">Add Task</button>
				</form>
				<ul>
					{this.state.todos.map((todo,i) => {
						return <TodoItem data={todo} key={`todo-${i}`} remove={this.removeTodo} todoIndex={i}/>
					})}
				</ul>
			</div>
		)
	}
}

class TodoItem  extends React.Component {
	render(){
		return (
			<li>{this.props.data} <button className="rm-item-btn" onClick={() => this.props.remove(this.props.todoIndex)}> X </button></li>
			);
	}
}

ReactDOM.render(<App />, document.getElementById('app'))