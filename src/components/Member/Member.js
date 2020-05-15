import React, { useState } from 'react';
import axios from 'axios';

import * as GridStyle from '../../styles/Grid';
import * as Style from './MemberStyle';

import LoadingComponent from '../Loading/Loading';

const Member = ({memberProps}) => {
  const {
    login,
    avatar_url
  } = memberProps;
  
  const [showDataMember, showDataMemberSet] = useState("");
  const [setMember, setMemberState] = useState([]);
  const [loading, setLoading] = useState(false);

  function memberDetails(login) {
    showDataMemberSet(showDataMember === "" ? "show" : "");

    try {
      setLoading(true);
      axios.get(`https://api.github.com/users/${login}`).then(res => {
        console.log(res.data);
        setMemberState(res.data);
      }).catch(err => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <>
      {loading && <LoadingComponent />}

      <Style.CardMember>
        <GridStyle.Row>
          <GridStyle.Col
            mobile={12}
          >
            <img
              src={avatar_url}
              alt={`User @${login}`}
            />
          </GridStyle.Col>

          <GridStyle.Col
            mobile={12}
            className="no-margin"
          >
            <p
              className="has-text-centered tx-du"
              onClick={() => memberDetails(login)}
            >
              <strong className="tx-up">
                login:
              </strong>
              {" "}
              {login}
            </p>
            
            <div className={`dataMember mt-10px ${showDataMember}`}>
              <GridStyle.Row>
                <GridStyle.Col
                  mobile={12}
                  tablet={6}
                  desktop={3}
                  className="flex align-itcenter cont-start mb-10px"
                >
                  <img src="icons/name.svg" alt="Member Name" />
                  <p>
                    <strong>Name: </strong>
                    {setMember.name}
                  </p>
                </GridStyle.Col>
                <GridStyle.Col
                  mobile={12}
                  tablet={6}
                  desktop={3}
                  className="flex align-itcenter cont-start mb-10px"
                >
                  <img src="icons/repo.svg" alt="Member Repo" />
                  <p>
                    <strong>Repos: </strong>
                    {setMember.public_repos}
                  </p>
                </GridStyle.Col>
              </GridStyle.Row>
              <GridStyle.Row>
                <GridStyle.Col
                  mobile={12}
                  tablet={6}
                  desktop={3}
                  className="flex align-itcenter cont-start mb-10px"
                >
                  <img src="icons/followers.svg" alt="Member Followers" />
                  <p>
                    <strong>Followers: </strong>
                    {setMember.followers}
                  </p>
                </GridStyle.Col>
                <GridStyle.Col
                  mobile={12}
                  tablet={6}
                  desktop={3}
                  className="flex align-itcenter cont-start mb-10px"
                >
                  <img src="icons/created_at.svg" alt="Member Created at" />
                  <p>
                    <strong>Created at: </strong>
                    {setMember.created_at}
                  </p>
                </GridStyle.Col>
              </GridStyle.Row>
            </div>
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.CardMember>
    </>
  )
}

export default Member;
