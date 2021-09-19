import React, { useState } from 'react';
import './App.css';
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([
    {
      username: "__dhavalshah",
      caption: "It works",
      imageUrl: "https://reactjs.org/logo-og.png"
    },
    {
      username: "__dhavalshah",
      caption: "It works",
      imageUrl: "https://reactjs.org/logo-og.png"
    }
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Hello World!</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }      
      {/* <Post username="__dhavalshah" caption="It works" imageUrl="https://reactjs.org/logo-og.png" />
      <Post username="dhavalshahalt" caption="It works too" imageUrl="https://ichef.bbci.co.uk/news/976/cpsprodpb/169A8/production/_120248529_gettyimages-157037529.jpg" /> */}
    </div>
  );
}

export default App;
