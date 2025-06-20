import { useState } from 'react';
import './App.css';
import Display from './Display.jsx';
import List from "./List.jsx";



function App() {
const[postID, setPostID] = useState("");
const[titles, setTitles] = useState([])

  return (
    <div className='App'>
      <div className='list'>
        <List setPostID={setPostID} titles={titles} setTitles={setTitles}/>
      </div>
      <div className='display'>
        <Display postID={postID}/>
      </div>
    </div>
  );
}

export default App;
