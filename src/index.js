import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <a href={post.url}>{post.title}</a> by{' '}
              <a href={`https://www.reddit.com/user/${post.author}`}>
                {post.author}
              </a>
              <br />
              up {post.ups} down {post.downs}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.querySelector('#root'));
