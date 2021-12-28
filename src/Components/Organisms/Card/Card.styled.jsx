import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 33rem;
  width: 27%;
  border: 1px solid ${({ theme }) => theme.color.border_light_blue};
  border-radius: 0.5rem;
  margin: 1rem;
  justify-content: center;

  @media (max-width: 950px) {
    width: 22rem;
  }
  @media (max-width: 750px) {
    width: 25rem;
  }
`;

export const StyledStarWrapper = styled.div`
  display: flex;
  min-height: 2rem;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0.3rem 0.3rem 0.5rem 0;
`;

export const StyledStar = styled.img`
  cursor: pointer;
  filter: ${({ isSelected }) => (isSelected ? `grayscale(100%)` : `none`)};
  &:hover {
    padding: 0.1rem;
  }
`;

export const StyledHeading = styled.header`
  width: 100%;
  text-align: center;
`;

export const StyledDescription = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem 0 1rem 0;
`;

export const StyledImage = styled.div`
  background-image: ${(props) => `url(${props.image_url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 80%;
  margin: 1rem auto;
`;
