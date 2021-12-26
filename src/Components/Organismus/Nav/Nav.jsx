import React from 'react';
import { Wrapper, StyledLink } from './Nav.styled';

export const Nav = () => {
  return (
    <Wrapper>
      <StyledLink to={'/'}>Home</StyledLink>
      <StyledLink to={'/favorite'}>Favorite</StyledLink>
      <StyledLink to={'/login'}>Sign In</StyledLink>
      <StyledLink to={'/register'}>Sign Up</StyledLink>
    </Wrapper>
  );
};
