import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './CardCointaner..styled';
import { Card } from '../../../Components';

export const CardCointaner = ({ beers, loading }) => {
  return (
    <Wrapper>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          {beers?.map((beer, index) => {
            return <Card key={beer.id || index} {...beer} />;
          })}
        </>
      )}
    </Wrapper>
  );
};

CardCointaner.propTypes = {
  beers: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired
};
