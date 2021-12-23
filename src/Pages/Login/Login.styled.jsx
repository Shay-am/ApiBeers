import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 36rem;
  height: 25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledDescription = styled.div`
  display: flex;
  width: 71%;
  justify-content: space-between;

  @media (max-width: 370px) {
    flex-direction: column;
    align-items: center;
  }
`;
