import styled from 'styled-components';
import * as C from '../../styles/Const';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: ${C.WHITE};
  box-shadow: 0 0.46875rem 0.1875rem rgba(4,9,20,0.03),
              0 0.9375rem 0.40625rem rgba(4,9,20,0.03),
              0 0.25rem 0.53125rem rgba(4,9,20,0.05),
              0 0.125rem 0.1875rem rgba(4,9,20,0.03);

  .title {
    color: ${C.MEDIUM_GREY};
  }

  p {
    line-height: 23px;
    text-transform: capitalize;
  }

  div {
    height: 45px;
  }

  img {
    max-width: 50px;
    max-height: 25px;
    width: 100%;
    height: auto;
  }
`
