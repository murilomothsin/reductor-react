import React, { Component } from 'react';

import axios from 'axios';


class Home extends Component {
  state = {
    url: '',
    result: '',
    errors: []
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({...this.state, url: e.target.value})
  }

  submit = (e) => {
    const BASE_URL = process.env.NODE_ENV === "production" ? 'https://reductor-app.herokuapp.com' : 'http://localhost:3000'
    e.preventDefault();
    axios.post(`${BASE_URL}/shorts`, {short: this.state})
      .then((response) => {
        this.setState({...this.state, result: response.data.url});
      })
      .catch((error) => {
        this.setState({...this.state, errors: error.response.data.errors});
      });
  }

  printErrors = () => (
    <ul className="errors">
      {this.state.errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )

  render() {
    return (
      <form onSubmit={this.submit}>
        <h2>Insert your URL:</h2>
        { this.state.result ? (
          <div>
            <h3>Congratulations... Take your link:</h3>
            <a href={this.state.result} target="_blank" rel="noopener noreferrer">{this.state.result}</a>
          </div>
        ) : (
          <div>
            <input
              placeholder="Insert your URL..."
              value={this.state.url}
              onChange={this.handleChange}
            />
            {this.printErrors()}
            <button type="submit" >Insert</button>
          </div>
        )}
        
      </form>
    );
  }
}

export default Home;
