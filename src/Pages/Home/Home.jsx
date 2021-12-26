import React, { useState } from 'react';
import {
  StyledDescription,
  StyledDescriptionError,
  Wrapper,
  StyledHeading,
  MainWrapper
} from './Home.styled';
import { Pagination, Heading, CardCointaner } from '../../Components';
import { Logo } from '../../Assets';
import { getCurentsBeers } from '../../Utils/getCurrentBeers';
import { useGetBeersApi } from '../../Services/useGetBeersApi';

export const Home = () => {
  const { beers, loading, error } = useGetBeersApi();
  const [beersPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const currentBeers = getCurentsBeers(beers, currentPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Wrapper>
        <StyledHeading>
          <Heading>Show Element</Heading>
        </StyledHeading>
        <MainWrapper>
          {error ? (
            <StyledDescriptionError>
              We can not fetch Data. Try later please!!!
            </StyledDescriptionError>
          ) : (
            <CardCointaner beers={currentBeers} loading={loading} error={error} />
          )}
        </MainWrapper>
        <StyledDescription>
          {!error && (
            <Pagination beersPerPage={beersPerPage} totalBeers={beers.length} paginate={paginate} />
          )}
          <Logo />
        </StyledDescription>
      </Wrapper>
    </>
  );
};
