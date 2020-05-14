import React from 'react';

import * as GridStyle from '../../styles/Grid';
import * as Style from './MemberStyle';

const Member = () => {
  return (
    <>
      <Style.CardMember>
        <GridStyle.Row>
          <GridStyle.Col
            mobile={12}
          >
            <p>IMG</p>
          </GridStyle.Col>

          <GridStyle.Col
            mobile={12}
          >
            <p className="has-text-centered">
              Name
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.CardMember>
    </>
  )
}

export default Member;
