import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './CardCointaner..styled';
import { Card } from '../../Organismus/Card';

export const CardCointaner = ({ beers, loading }) => {
  return (
    <Wrapper>
      {loading && <div>loading...</div>}

      {!loading && (
        <>
          {beers?.map((beer) => {
            return <Card key={beer.id} {...beer} />;
          })}
        </>
      )}
    </Wrapper>
  );
};

CardCointaner.propTypes = {
  beers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
