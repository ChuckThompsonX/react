import React, { useState, useEffect } from 'react';
import axios from 'axios';

// npm install axios

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://chuckthompsonx.com')
      .then(resp => setPosts(resp.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
