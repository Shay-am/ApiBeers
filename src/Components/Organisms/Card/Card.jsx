import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMatch } from 'react-router-dom';
import logoStar from '../../../Assets/star.png';
import {
  StyledHeading,
  StyledDescription,
  StyledImage,
  StyledStarWrapper,
  StyledStar
} from './Card.styled';
import { Description, HeadingH3 } from '../..';
import { CardWrapper } from './Card.styled';
import { useAuthContext } from '../../../Context/authProvider';

export const Card = ({ name, image_url, tagline, ingredients }) => {
  const [isSelected, setIsSelected] = useState(false);
  const favorite = useMatch('/favorite');
  const { addBeer } = useAuthContext();

  const handleChangeSelected = () => setIsSelected(true);

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

  useEffect(() => {}, [isSelected]);

  return (
    <CardWrapper>
      {!favorite && (
        <StyledStarWrapper>
          <StyledStar
            isSelected={isSelected}
            src={logoStar}
            alt="image star"
            onClick={() => addBeer(saveObjInDataBase, handleChangeSelected)}
          />
        </StyledStarWrapper>
      )}
      {favorite && <StyledStarWrapper />}
      <StyledHeading>
        <HeadingH3>{name}</HeadingH3>
      </StyledHeading>
      <StyledDescription>
        <Description>{tagline}</Description>
        <Description>składniki: {keysIngredients()}</Description>
      </StyledDescription>
      <StyledImage image_url={image_url} />
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
