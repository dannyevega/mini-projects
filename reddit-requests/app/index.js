import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class Reddit extends Component {
  state = {
    posts: [],
    error: null,
    loading: true
  }

  componentDidMount() {
    const subreddit = this.props.subreddit;
    axios.get(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => {
        const posts = response.data.data.children.map(obj => obj.data);
        this.setState({
          loading: false,
          posts
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
  }

  render() {
    const { posts, error, loading } = this.state;
    const subreddit = this.props.subreddit;
    
    return (
      <div className="container">
        {error ? (
          <div>{error}</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{subreddit}</h1>
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <Reddit subreddit="reactjs" />,
  document.getElementById('app')
)