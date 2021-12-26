/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Logo } from '../../Assets';
import { CardCointaner, Description, Heading } from '../../Components';
import { useAuthContext } from '../../Context/authProvider';
import { MainWrapper, StyledHeading, Wrapper } from '../Home/Home.styled';

export const Favorite = () => {
  const { getBeersFromDataBase } = useAuthContext();

  // const { favoriteBeers } = useAuthContext();
  const [favoriteBeers, setData] = useState([]);

  useEffect(() => {
    setData(getBeersFromDataBase());
  }, []);

  return (
    <Wrapper>
      <StyledHeading>
        <Heading>My Favorites Beers</Heading>
      </StyledHeading>
      <MainWrapper>
        {!favoriteBeers && favoriteBeers.length >= 1 ? (
          <Description>Nie ma ulubionych</Description>
        ) : (
          <CardCointaner beers={favoriteBeers} loading={false} />
        )}
      </MainWrapper>
      <Logo />
    </Wrapper>
  );
};
