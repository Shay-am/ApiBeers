import React, { useEffect } from 'react';
import { Wrapper, StyledLink } from './Nav.styled';
import { useAuthContext } from 'Context/authProvider';

export const Nav = () => {
  const { activeTokenUser, logut } = useAuthContext();

  useEffect(() => {}, [activeTokenUser]);

  return (
    <Wrapper>
      <StyledLink to={'/'}>Home</StyledLink>
      <StyledLink to={'/favorite'}>Favorite</StyledLink>
      {activeTokenUser ? (
        <StyledLink onClick={logut} to={'/login'}>
          Logut
        </StyledLink>
      ) : (
        <>
          <StyledLink to={'/register'}>Sign Up</StyledLink>
          <StyledLink to={'/login'}>Sign In</StyledLink>
        </>
      )}
    </Wrapper>
  );
};
