/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMatch } from 'react-router-dom';
import logoStar from '../../../Assets/star.png';
import {
  StyledHeading,
  StyledDescription,
  StyledImage,
  StyledStarWrapper,
  StyledStar,
  CardWrapper
} from './Card.styled';
import { Description, HeadingH3 } from '../..';
import { convertObjectToString } from '../../../Utils/convertObjectToString';
import { useAddBeerToDataBase } from '../../../Services/useAddBeerToDataBase';

export const Card = ({ name, image_url, tagline, ingredients }) => {
  const { addBeer, loading, error } = useAddBeerToDataBase();
  const [isSelected, setIsSelected] = useState(false);
  const favorite = useMatch('/favorite');
  const ingredient = convertObjectToString(ingredients);

  const handleChangeSelected = () => setIsSelected(true);

  const saveObjInDataBase = {
    name: name,
    image_url: image_url,
    tagline: tagline,
    ingredients: ingredient
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
            onClick={() => (!isSelected ? addBeer(saveObjInDataBase, handleChangeSelected) : null)}
          />
        </StyledStarWrapper>
      )}
      {favorite && <StyledStarWrapper />}
      <StyledHeading>
        <HeadingH3>{name}</HeadingH3>
      </StyledHeading>
      <StyledDescription>
        <Description>{tagline}</Description>
        <Description>składniki: {ingredient}</Description>
      </StyledDescription>
      <StyledImage image_url={image_url} />
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  ingredients: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  index: PropTypes.number,
  sendEmail: PropTypes.func
};
