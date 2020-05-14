import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as GridStyle from "./styles/Grid";

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
      <GridStyle.Container>
        <GridStyle.Row>
          <GridStyle.Col>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
      </GridStyle.Container>
    </>
  );
}

export default App;
