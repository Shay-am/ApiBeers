import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25.3rem;
  height: 33.3rem;
  border: 1px solid ${({ theme }) => theme.color.border_light_blue};
  border-radius: 0.5rem;
  margin: 1rem;

  @media (max-width: 750px) {
    width: 25rem;
  }
`;

export const StyledStar = styled.img`
  position: absolute;
  right: 1.5rem;
  color: blue;
  top: 1.5rem;
`;
export const StyledHeading = styled.header`
  width: 100%;
  text-align: center;
  margin-top: 4.1rem;
`;

export const StyledDescription = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-around;
  /* min-height: 2.9rem; */
  margin: 1.6rem 0 0 0;
`;

export const StyledImage = styled.div`
  width: 90%;
  height: 55%;
  background-color: aqua;
  margin-top: 2rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
