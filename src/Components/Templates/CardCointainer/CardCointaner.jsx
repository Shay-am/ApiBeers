/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Wrapper } from './CardCointaner..styled';
import { Card } from '../../Organismus/Card';
import { StyledDescription, StyledLogo } from '../../../Pages/Home/Home.styled';
import { Description } from '../../../Components';
import { useGetBeersApi } from '../../../Services/useGetBeersApi';
export const CardCointaner = () => {
  const { data, loading } = useGetBeersApi();
  const dataArray = Array.from(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [counter, setCunter] = useState(5);

  return (
    <Wrapper>
      {loading && <div>loading...</div>}
      {!loading && (
        <>
          {dataArray.map((beer) => {
            return <Card key={beer.id} {...beer} />;
          })}
        </>
      )}
      <StyledDescription>
        <Description small> 1,2,3</Description>
        <StyledLogo />
      </StyledDescription>
    </Wrapper>
  );
};
