import styled from '@emotion/styled';
export const Container = styled.div`
  max-width: 480px;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
