import styled from 'styled-components';
import isOk from 'Assets/isOk.png';
import isNotOk from 'Assets/isNotOk.png';
import { StyledDescription } from 'Pages/Login/Login.styled';

export const StyledLoginCointaner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.9rem;
  span {
    position: absolute;
    left: 0.8rem;
    bottom: -0.6rem;
  }
`;

export const StyledCointanerInput = styled(StyledLoginCointaner)`
  &:after {
    content: '';
    background-image: ${({ isValid }) => (isValid ? `url(${isOk})` : `url(${isNotOk})`)};
    background-size: 1.5rem 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 4.1rem;
    right: 2rem;
  }
`;

export const StyledDescriptionCointaner = styled(StyledDescription)`
  width: 50%;
`;
