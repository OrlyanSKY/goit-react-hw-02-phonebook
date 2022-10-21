import styled from '@emotion/styled';

export const ListItem = styled.li`
  outline: 1px solid black;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.71);
  box-shadow: 0px -1px 33px 4px rgba(0, 0, 0, 0.5);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DelBtn = styled.button`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  outline: none;
  cursor: pointer;
  border: 2px solid rgba(64, 103, 183, 0.5);
  background-color: rgba(64, 103, 183, 0.4);
`;
