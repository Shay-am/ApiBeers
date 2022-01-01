import React from 'react';
import PropTypes from 'prop-types';
import { Description } from 'Components';
import { StyledPagination } from './Pagination.styled';

export const Pagination = ({ beersPerPage, totalBeers, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <StyledPagination>
        {pageNumber.map((number) => {
          return (
            <Description onClick={() => paginate(number)} key={number}>
              {number}
            </Description>
          );
        })}
      </StyledPagination>
    </>
  );
};

Pagination.propTypes = {
  beersPerPage: PropTypes.number.isRequired,
  totalBeers: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};
