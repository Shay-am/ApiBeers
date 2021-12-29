/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import isOk from '../../Assets/isOk.png';
import isNotOk from '../../Assets/isNotOk.png';
import { StyledDescription } from '../Login/Login.styled';
import { Description } from '../../Components';

export const StyledLoginCointaner = styled.div`
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
    content: ${({ isValid }) => (isValid ? `url(${isOk})` : `url(${isNotOk})`)};
    width: 1rem;
    position: absolute;
    top: 4.1rem;
    right: 2rem;
  }
`;

export const StyledDescriptionCointaner = styled(StyledDescription)`
  width: 50%;
`;

export const StyledDescriptionError = styled(Description)`
  color: ${({ theme, error }) => (error ? 'red' : theme.color.text_blue)};
  font-size: calc(0.7rem + 1vmin);
`;
