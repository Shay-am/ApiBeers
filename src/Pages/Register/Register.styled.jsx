/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import isOk from '../../Assets/isOk.png';
import isNotOk from '../../Assets/isNotOk.png';
import { StyledDescription } from '../Login/Login.styled';
import { Description } from '../../Components';

export const StyledCointanerInput = styled.div`
  position: relative;

  &::after {
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
  color: red;
`;
