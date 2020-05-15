import styled from 'styled-components';
import * as C from '../../styles/Const';

export const CardMember = styled.div`
  background-color: ${C.RED};
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  border-radius: 4px;
  color: ${C.WHITE};
  display: block;
  padding: 1rem;
  overflow: scroll;
  font-family: 'robotoregular';

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
  }

  p {

    strong {
      font-family: 'robotomedium';
    }
  }

  .dataMember {
    display: none;
    outline: none;
    transition: background-color 0.6s ease;

    p {
      color: ${C.WHITE};
      font-size: 1rem;
      line-height: 19px;
    }

    img {
      max-width: 50px;
      max-height: 25px;
      width: 100%;
      height: auto;
      margin: 0;
    }

    &.show {
      display: block;
    }
  }
`;
