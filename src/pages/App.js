import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as GridStyle from '../styles/Grid';

import LoadingComponent from '../components/Loading/Loading';
import HeaderComponent from '../components/Header/Header';
import MemberComponent from '../components/Member/Member';

const App = () => {
  const [setMembers, setMembersState] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMembers = useCallback(() => {
    try {
      setLoading(true);
      axios.get('https://api.github.com/orgs/facebook/public_members').then(res => {
        setMembersState(res.data);
      }).catch(err => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  });

  async function resultSearch(e) {
    const term = e.target.value;
    setMembers.filter((data) => {
      if(term === undefined) {
        return data;
      }
      else if(data.login.includes(term)) {
        return data;
      }
    }).map(data => {
      return (
        <div>
          <ul>
            <li>
              <span>{data.login}</span>
            </li>
          </ul>
        </div>
      )
    });
  }

  useEffect(() => {
    loadMembers();
    document.title = 'Lello Condomínios - List Facebook Members';
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      <HeaderComponent
        title="Lello - List Members"
      />

      <input
        className="flex"
        type="text"
        placeholder="Search member"
        onChange={(e) => resultSearch(e)}
      />

      <div className="mt-125px">
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
                  <MemberComponent
                    memberProps={item}
                  />
                </GridStyle.Col>
              ))
            }
          </GridStyle.Row>
        </GridStyle.Container>
      </div>
    </>
  );
}

export default App;
