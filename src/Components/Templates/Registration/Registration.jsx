import React from 'react';
import PropType from 'prop-types';
import { Wrapper, FormCointaner } from './Registration.styled';
import { Logo } from '../../../Assets';
import { Heading } from '../../../Components';

export const Registration = ({ children, name }) => {
  return (
    <Wrapper>
      <FormCointaner>
        <Heading small>{name}</Heading>
        {children}
        <Logo />
      </FormCointaner>
    </Wrapper>
  );
};

Registration.propTypes = {
  children: PropType.object.isRequired,
  name: PropType.string.isRequired
};
