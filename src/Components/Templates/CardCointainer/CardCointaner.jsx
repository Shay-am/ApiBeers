import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, LoaderWrapper } from './CardCointaner..styled';
import { Card, LoaderSpinner } from 'Components';

export const CardCointaner = ({ beers, loading }) => {
  return (
    <Wrapper>
      {loading && (
        <LoaderWrapper>
          <LoaderSpinner />
        </LoaderWrapper>
      )}

      {!loading && (
        <>
          {beers?.map((beer, index) => {
            return <Card key={beer.id || index} {...beer} index={index} />;
          })}
        </>
      )}
    </Wrapper>
  );
};

CardCointaner.propTypes = {
  beers: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  sendEmail: PropTypes.func
};
