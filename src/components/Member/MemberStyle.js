import styled from 'styled-components';

import * as C from '../../styles/Const';

export const CardMember = styled.div`
  background-color: ${C.DARK_GREY};
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  color: ${C.WHITE};
  display: block;
  padding: 1rem;
  overflow: scroll;
  font-family: 'robotolight';
`;
