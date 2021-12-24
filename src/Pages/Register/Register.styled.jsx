/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import isOk from '../../Assets/isOk.png';
import isNotOk from '../../Assets/isNotOk.png';
import { StyledDescription } from '../Login/Login.styled';

export const StyledCointanerInput = styled.div`
  position: relative;

  &::after {
    content: ${({ isValid }) => (isValid ? `url(${isOk})` : `url(${isNotOk})`)};
    position: absolute;
    top: 4.5rem;
    right: 2rem;
  }
`;

export const StyledDescriptionCointaner = styled(StyledDescription)`
  width: 50%;
`;
