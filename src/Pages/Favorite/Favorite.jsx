import React, { useEffect } from 'react';
import { Logo } from 'Assets';
import { CardCointaner, Description, Heading, LoaderSpinner, SendEmail } from 'Components';

import { MainWrapper, StyledHeading, Wrapper } from 'Pages/Home/Home.styled';
import { useFetchDataServer } from 'Hooks/useFetchDataServer';

export const Favorite = () => {
  const { data, loading, error } = useFetchDataServer({ url: 'getBeers' });

  const beers = data?.data?.data;

  useEffect(() => {}, [beers]);

  return (
    <Wrapper>
      <SendEmail beers={beers} />
      <StyledHeading>
        <Heading>My Favorites Beers</Heading>
      </StyledHeading>

      <MainWrapper>
        {loading && (
          <Description>
            <LoaderSpinner />
          </Description>
        )}
        {!loading && <CardCointaner beers={beers} loading={loading} />}
        {error && <Description>Nie ma ulubionych</Description>}
      </MainWrapper>
      <Logo />
    </Wrapper>
  );
};
