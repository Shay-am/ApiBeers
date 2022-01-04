/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Description } from 'Components';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledFormWrapper,
  StyledDescription
} from './SendEmail.styled';
import { useSendEmail } from 'Api/Services/useSendEmail';

export const SendEmail = ({ beers }) => {
  const { handleSubmitEmail, message, loading, emailError, handleChange, errors } =
    useSendEmail(beers);
  return (
    <StyledFormWrapper>
      <StyledDescription>
        {message && (
          <Description size="1.2rem" error={emailError}>
            {message}
          </Description>
        )}
        {errors && (
          <Description size="1rem" error={errors.email}>
            {errors.email}
          </Description>
        )}
      </StyledDescription>
      <StyledForm loading={loading} onSubmit={(e) => handleSubmitEmail(e)}>
        Send favorites beers
        <label htmlFor="send-email" />
        <StyledInput
          type="email"
          id="send-email"
          name="email"
          placeholder="write here your email"
          onChange={handleChange}
        />
        <StyledButton type="submit">send</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

SendEmail.propTypes = {
  beers: PropTypes.array
};
