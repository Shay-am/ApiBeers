import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 65%;
  flex-wrap: wrap;
  justify-content: left;

  padding: 1rem;
  margin: 1rem;
  @media (max-width: 870px) {
    justify-content: center;
  }
`;
