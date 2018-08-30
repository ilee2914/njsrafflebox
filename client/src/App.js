import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {users: []}

	async componentDidMount() {
		try {
			const res = await fetch('/users');
			const json = await res.json();
			this.setState({users:json});
		} catch (err) {
			console.log("Something went wrong!");
		}
	}

	async handleAddUser(e) {
		e.preventDefault();
		if (this.refs.username.value === '') {
			console.log("gooby pls");
		} else {
			try {
				let response = await fetch('/addUser', {
					method: 'POST',
					body: JSON.stringify({
						username: this.refs.username.value
					}),
					headers: {'Content-Type': 'application/json'}
				});
				console.log(response);
			} catch (err) {
				console.log("Something went wrong!");
			}
		}
	}

	async handleUpdate(e) {
		e.preventDefault();
		if (this.refs.password.value === '' || this.refs.password.value === '') {
			console.log("gooby pls");
		} else {
			try {
				let response = await fetch('/addUser', {
					method: 'POST',
					body: JSON.stringify({
						username: this.refs.username.value,
						password: this.refs.password.value
					}),
					headers: {'Content-Type': 'application/json'}
				});
				console.log(response);
			} catch (err) {
				console.log("Something went wrong!");
			}
		}
	}

	render() {
		return (
		<div className="App">
			<h1>Users</h1>
			<form onSubmit={this.handleAddUser.bind(this)}>
				<input type="text" ref="username" name="username"/> <br/>
				<input type="submit" value="Submit"/>
			</form>
			<form onSubmit={this.handleUpdate.bind(this)}>
				<input type="password" ref="password" name="password"/> <br/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
		);
	}
}

export default App;
