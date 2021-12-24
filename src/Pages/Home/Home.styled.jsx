import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledHeading = styled.header`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  margin-top: 2rem;
  width: 100%;
`;
export const MainWrapper = styled.main`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledDescription = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const StyledDescriptionError = styled.span`
  font-size: 3rem;
  color: red;
`;
