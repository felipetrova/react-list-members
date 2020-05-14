import React from 'react';

import * as GridStyle from '../../styles/Grid';
import * as Style from './MemberStyle';

const Member = ({memberProps}) => {
  const {
    id,
    login,
    avatar_url
  } = memberProps;

  return (
    <>
      <Style.CardMember>
        <GridStyle.Row>
          <GridStyle.Col
            mobile={12}
          >
            <img
              src={avatar_url}
              className="album-sprite"
            />
          </GridStyle.Col>

          <GridStyle.Col
            mobile={12}
          >
            <p className="has-text-centered">
              <strong>
                login:
              </strong>
              {" "}
              {login}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.CardMember>
    </>
  )
}

export default Member;
