import React from 'react';
import PropType from 'prop-types';
import { Label, StyledWrapper } from './InputWithLabel.styled';
import { Input } from '../../Atoms/Input/Input';

export const InputWithLabel = ({ labelId, labelTitle, type, name, placeholder }) => {
  return (
    <StyledWrapper>
      <Label htmlFor={labelId}>{labelTitle}</Label>
      <Input type={type} name={name} id={labelId} placeholder={placeholder} required />
    </StyledWrapper>
  );
};

InputWithLabel.propTypes = {
  labelId: PropType.string.isRequired,
  labelTitle: PropType.string.isRequired,
  type: PropType.string.isRequired,
  name: PropType.string.isRequired,
  placeholder: PropType.string.isRequired
};

InputWithLabel.defaultProps = {
  type: 'text'
};
