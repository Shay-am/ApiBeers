import React from 'react';
import { Logo } from 'Assets';
import { CardCointaner, Description, Heading, SendEmail } from 'Components';
import { getBeersFromDataBase } from 'Api/Services/useGetFavoritesBeer';
import { MainWrapper, StyledHeading, Wrapper } from 'Pages/Home/Home.styled';

export const Favorite = () => {
  const { beers, loading, error } = getBeersFromDataBase();

  return (
    <Wrapper>
      <SendEmail beers={beers} />
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
