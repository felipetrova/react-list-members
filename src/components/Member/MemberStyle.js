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
  height: 350px;

  img {
    max-width: 250px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
  }

  p {
    cursor: pointer;

    strong {
      font-family: 'robotomedium';
    }
  }

  .dataMember {
    display: none;
    visibility: hidden;
    outline: none;
    transition: display .2s linear, visibility .2s linear;

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
      visibility: visible;
    }
  }
`;
