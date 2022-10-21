import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 15px;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px -1px 33px 4px rgba(0, 0, 0, 0.35);
  background-color: rgba(64, 103, 183, 0.4);
`;

export const Label = styled.label`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  font-size: 20px;
  font-weight: 500;
  color: white;
  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.71);
`;

export const Field = styled.input`
  border: none;
  outline: none;
  width: 250px;
  height: 25px;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 18px;
  font-style: italic;

  box-shadow: 0px -1px 33px 4px rgba(0, 0, 0, 0.5);
`;
export const Button = styled.button`
  display: inline-block;
  padding: 10px;
  width: auto;
  border: 2px solid white;
  outline: none;
  font-weight: 600;
  border-radius: 15px;
  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.71);
  cursor: pointer;
`;

export const Text = styled.p`
  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.71);
  font-size: 18px;
  font-weight: 500;
`;
