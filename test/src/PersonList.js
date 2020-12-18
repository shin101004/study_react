import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    title: '',
    body:'',
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  }

  handleContentChange = event => {
    this.setState({body: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      title : this.state.title,
      body : this.state.body
    };

    console.log(user);

    axios.post(`https://jsonplaceholder.typicode.com/posts`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="title" onChange={this.handleTitleChange} />
            <input type="text" name="body" onChange={this.handleContentChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}