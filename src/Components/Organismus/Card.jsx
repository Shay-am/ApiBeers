import React from 'react';
import PropTypes from 'prop-types';
import logoStar from '../../Assets/star.png';
import {
  StyledHeading,
  StyledDescription,
  StyledImage,
  Image,
  StyledStarWrapper,
  StyledStar
} from './Card.styled';
import { Description, HeadingH3 } from '../../Components';

import { CardWrapper } from './Card.styled';

export const Card = ({ name, image_url, tagline, ingredients }) => {
  const keysIngredients = Object.keys(ingredients).join(' ');

  return (
    <CardWrapper>
      <StyledStarWrapper>
        <StyledStar src={logoStar} alt="image star" />
      </StyledStarWrapper>
      <StyledHeading>
        <HeadingH3>{name}</HeadingH3>
      </StyledHeading>
      <StyledDescription>
        <Description>{tagline}</Description>
        <Description>składniki: {keysIngredients}</Description>
      </StyledDescription>
      <StyledImage>
        <Image src={image_url} alt="cos" />
      </StyledImage>
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  ingredients: PropTypes.object.isRequired
};
