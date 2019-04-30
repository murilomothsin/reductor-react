import React, { Component } from 'react';

import axios from 'axios';


class Hot extends Component {
  state = {
    shorts: []
  }

  componentDidMount() {
    this.getShortList()
  }

  getShortList = () => {
    axios.get('http://localhost:3000/shorts')
      .then((response) => {
        this.setState({...this.state, shorts: response.data.shorts, root_url: response.data.root_url});
      })
      .catch((error) => {
        this.setState({...this.state, errors: error.response.data.errors});
      });
  }

  shortsList = () => (
    this.state.shorts.map((short) => (
      <tr key={short.id}>
        <td>{short.click_count}</td>
        <td>{short.page_title}</td>
        <td><a href={`${this.state.root_url}${short.url_digest}`} target="_blank" rel="noopener noreferrer">{short.url}</a></td>
      </tr>
    ))
  )


  render() {
    return (
      <div>
        <h2>Top 100 links</h2>
        <table>
          <thead>
            <tr>
              <th>Click Count</th>
              <th>Title</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.shortsList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Hot;
