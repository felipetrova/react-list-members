import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as GridStyle from './styles/Grid';

import Member from './components/Member/Member'

const App = () => {
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
          {setMembers && setMembers.length > 0 &&
            setMembers.map((item, index) => (
              <GridStyle.Col
                key={index + 1}
                mobile={12}
                tablet={6}
                desktop={4}
              >
                <Member
                  memberProps={item}
                />
              </GridStyle.Col>
            ))
          }
        </GridStyle.Row>
      </GridStyle.Container>
    </>
  );
}

export default App;
