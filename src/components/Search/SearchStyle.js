import styled from 'styled-components';
import * as C from '../../styles/Const';

export const FormSearch = styled.form`
  width: 100%;
  position: fixed;
  top: 45px;
  left: 0;
  z-index: 9;

  height: 50px;
  background: #EEEEEE;
  padding: 10px 0;
  border: 1px solid ${C.LIGHT_GREY};
`;

export const InputSearch = styled.input`
  height: 100%;
  padding-left: 10px;
  color: #AAAAAA;
  background: #EEEEEE;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlagSearch = styled.div`
  padding-right: 10px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: url(/images/icons/search.svg) no-repeat center;
  background-size: 31px 22px;
`;

export const SuggestionsSearch = styled.ul`
  display: block;
  list-style: none;
  background: ${C.WHITE};
  border: 1px solid ${C.LIGHT_GREY};
  border-radius: 4px;
  width: 50%;
  height: 40px;
  overflow-y: hidden;
  position: relative;
  left: 25%; top: 8px;

    li {
      display: block;
      padding: 10px;
      font-size: 14px;
      font-weight: normal;
      line-height: 36px;
      color: ${C.DARK_GREY};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:focus,
      &:hover {
        background: #eeeeee6b;
      }
    }
`;
