import React from 'react';
import PropType from 'prop-types';
import { Label, StyledWrapper } from './InputWithLabel.styled';
import { Input } from '../..';

export const InputWithLabel = ({
  labelId,
  labelTitle,
  type,
  name,
  placeholder,
  onChange,
  autoComplete
}) => {
  return (
    <StyledWrapper>
      <Label htmlFor={labelId}>{labelTitle}</Label>
      <Input
        type={type}
        name={name}
        id={labelId}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
    </StyledWrapper>
  );
};

InputWithLabel.propTypes = {
  labelId: PropType.string.isRequired,
  labelTitle: PropType.string.isRequired,
  type: PropType.string.isRequired,
  name: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  autoComplete: PropType.string,
  onChange: PropType.func.isRequired
};

InputWithLabel.defaultProps = {
  type: 'text'
};
