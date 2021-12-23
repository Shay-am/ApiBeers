/* eslint-disable react/prop-types */
import React from 'react';
import logoStar from '../../Assets/star.png';
import { StyledHeading, StyledDescription, StyledImage, Image } from './Card.styled';
import { Description, Heading } from '../../Components';

import { CardWrapper, StyledStar } from './Card.styled';

export const Card = ({ name, image_url, tagline, food_pairing }) => {
  return (
    <CardWrapper>
      <StyledStar src={logoStar} alt="image star" />
      <StyledHeading>
        <Heading small>{name}</Heading>
      </StyledHeading>
      <StyledDescription>
        <Description>{tagline}</Description>
        <Description>{food_pairing[0]}</Description>
      </StyledDescription>
      <StyledImage>
        <Image src={image_url} alt="cos" />
      </StyledImage>
    </CardWrapper>
  );
};
