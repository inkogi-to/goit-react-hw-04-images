import styled from 'styled-components';

export const SearchHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
 background-color: rgb(63, 81, 181);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForma = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const SearchBtn = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;
