/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import logoStar from '../../../Assets/star.png';
import {
  StyledHeading,
  StyledDescription,
  StyledImage,
  Image,
  StyledStarWrapper,
  StyledStar
} from './Card.styled';
import { Description, HeadingH3 } from '../../../Components';

import { CardWrapper } from './Card.styled';
import { useAuthContext } from '../../../Context/authProvider';

export const Card = ({ name, image_url, tagline, ingredients }) => {
  const { addBeer } = useAuthContext();
  const keysIngredients = Object.keys(ingredients).join(' ');

  const obj = {
    name: name,
    image_url: image_url,
    tagline: tagline,
    ingredients: ingredients
  };

  return (
    <CardWrapper>
      <StyledStarWrapper>
        <StyledStar src={logoStar} alt="image star" onClick={() => addBeer(obj)} />
      </StyledStarWrapper>
      <StyledHeading>
        <HeadingH3>{name}</HeadingH3>
      </StyledHeading>
      <StyledDescription>
        <Description>{tagline}</Description>
        <Description>składniki: {keysIngredients}</Description>
      </StyledDescription>
      <StyledImage>
        <Image src={image_url} alt={name} />
      </StyledImage>
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  ingredients: PropTypes.any.isRequired
};
