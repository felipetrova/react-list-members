import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [setMembers, setMembersState] = useState([]);

  const loadMembers = useCallback(()=> {
    try {
      axios.get('https://api.github.com/orgs/facebook/public_members').then(res => {
        console.log(res.data);
        setMembersState(res.data);
      }).catch(err => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  })

  useEffect(() => {
    loadMembers();
    document.title = 'React List Facebook Members';
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
