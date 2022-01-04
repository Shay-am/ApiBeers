import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 65%;
  flex-wrap: wrap;
  justify-content: left;

  padding: 1rem;
  margin: 1rem;
  @media (max-width: 1245px) {
    justify-content: center;
    width: 75%;
  }
  @media (max-width: 960px) {
    justify-content: center;
    width: 75%;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  text-align: center;
`;
