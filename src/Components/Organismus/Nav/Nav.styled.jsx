import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  width: 100vw;
  height: 4rem;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5rem;
`;

export const StyledLink = styled(NavLink)`
  width: 8rem;
  height: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text_blue};

  &.active {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.btn};
  }
`;
