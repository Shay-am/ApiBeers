/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Logo } from '../../Assets';
import { CardCointaner, Description, Heading } from '../../Components';
import { getBeersFromDataBase } from '../../Services/useGetFavoritesBeer';
import { MainWrapper, StyledHeading, Wrapper } from '../Home/Home.styled';

export const Favorite = () => {
  const { beers, loading, error } = getBeersFromDataBase();
  return (
    <Wrapper>
      <StyledHeading>
        <Heading>My Favorites Beers</Heading>
      </StyledHeading>
      <MainWrapper>
        {error ? (
          <Description>Nie ma ulubionych</Description>
        ) : (
          <CardCointaner beers={beers} loading={loading} />
        )}
      </MainWrapper>
      <Logo />
    </Wrapper>
  );
};
