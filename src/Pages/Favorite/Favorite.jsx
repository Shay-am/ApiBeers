import React, { useEffect, useState } from 'react';
import { Logo } from '../../Assets';
import { CardCointaner, Description, Heading } from '../../Components';
import { StyledForm, StyledInput, StyledButton } from './Favorite.styled';
import { getBeersFromDataBase } from '../../Services/useGetFavoritesBeer';
import { MainWrapper, StyledHeading, Wrapper } from '../Home/Home.styled';
import { sendEmail } from '../../Utils/sendEmail';

export const Favorite = () => {
  const { beers, loading, error } = getBeersFromDataBase();
  const [email, setEmail] = useState('');

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const beerToSend = [];

    beers.map((beer, index) => {
      beerToSend.push({ number: index + 1, name: beer.name });
    });

    try {
      const payload = await sendEmail(beerToSend, email);
      return payload;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [email]);

  return (
    <Wrapper>
      <StyledForm onSubmit={(e) => handleSendEmail(e)} aria-label="Send your favorites beers">
        Send favorites beers
        <label htmlFor="send-email" />
        <StyledInput
          type="email"
          id="send-email"
          name="email"
          placeholder="write here your email"
          value={email || ' '}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledButton type="submit">send</StyledButton>
      </StyledForm>
      <StyledHeading>
        <Heading>My Favorites Beers</Heading>
      </StyledHeading>
      <MainWrapper>
        {error ? (
          <Description>Nie ma ulubionych</Description>
        ) : (
          <CardCointaner beers={beers} loading={loading} sendEmail={sendEmail} />
        )}
      </MainWrapper>
      <Logo />
    </Wrapper>
  );
};
