import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.bgColor};
`;

export const FormCointaner = styled.div`
  display: flex;
  width: 70vw;
  height: 90vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`;
