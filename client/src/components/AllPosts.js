import React, { Component } from 'react';
import axios from 'axios';

class AllPosts extends Component {
  state = {
    posts: []
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/posts")
      .then(res => {
        const newPosts = res.data.map(c => {
          return {
            id: c.id,
            title: c.title,
            text: c.text
          }
        });
        this.setState({
          posts: newPosts
        }, function() {
          console.log("Got the values");
        });
      })
      .catch(error =>  console.log(error));
  }

  render() {
    return (
      <div className="container">
          {this.state.posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <h6>{post.text}</h6>
            </div>
          ))}
      </div>
    );
  }
}

export default AllPosts;