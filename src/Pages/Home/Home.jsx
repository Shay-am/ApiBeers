import React from 'react';
import { Wrapper, StyledHeading, MainWrapper } from './Home.styled';
import { Heading } from '../../Components';
import { CardCointaner } from '../../Components/Templates/CardCointainer/CardCointaner';

export const Home = () => {
  return (
    <>
      <Wrapper>
        <StyledHeading>
          <Heading>Show Element</Heading>
        </StyledHeading>
        <MainWrapper>
          <CardCointaner />
        </MainWrapper>
      </Wrapper>
    </>
  );
};
