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
import { Description, HeadingH3 } from '../..';
import { useMatch } from 'react-router-dom';
import { addBeertest } from '../../../Services/addBeerToDataBase';
import { CardWrapper } from './Card.styled';
import { useAuthContext } from '../../../Context/authProvider';

export const Card = ({ name, image_url, tagline, ingredients, index, sendEmail }) => {
  const favorite = useMatch('/favorite');
  const { addBeer } = useAuthContext();

  const keysIngredients = () => {
    if (typeof ingredients === 'object') {
      return Object.keys(ingredients).join(' ');
    } else {
      return ingredients;
    }
  };
  const saveObjInDataBase = {
    name: name,
    image_url: image_url,
    tagline: tagline,
    ingredients: keysIngredients()
  };

  return (
    <CardWrapper>
      {!favorite && (
        <StyledStarWrapper>
          <StyledStar src={logoStar} alt="image star" onClick={() => addBeer(saveObjInDataBase)} />
        </StyledStarWrapper>
      )}
      {favorite && (
        <StyledStarWrapper>
          {/* <StyledStar src={logoStar} alt="image star" onClick={(e) => sendEmail(e)} /> */}
        </StyledStarWrapper>
      )}
      <StyledHeading>
        <HeadingH3>{name}</HeadingH3>
      </StyledHeading>
      <StyledDescription>
        <Description>{tagline}</Description>
        <Description>składniki: {keysIngredients()}</Description>
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
  ingredients: PropTypes.any.isRequired,
  index: PropTypes.number,
  sendEmail: PropTypes.func
};
