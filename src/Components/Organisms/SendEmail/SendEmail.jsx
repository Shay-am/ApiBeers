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
// import { useValidate } from 'Hooks/useValidate';

export const SendEmail = ({ beers }) => {
  // const {values, handleSubmit, errors, handleChange} = useValidate()

  const [email, setEmail] = useState('');
  const { handleSubmitEmail, message, loadingSendEmail, emailError } = useSendEmail(beers, email);
  return (
    <StyledFormWrapper>
      <StyledDescription>
        {message && (
          <Description size="1.2rem" error={emailError}>
            {message}
          </Description>
        )}
      </StyledDescription>
      <StyledForm
        loading={loadingSendEmail ? 1 : 0}
        onSubmit={handleSubmitEmail}
        aria-label="Send your favorites beers">
        Send favorites beers
        <label htmlFor="send-email" />
        <StyledInput
          type="email"
          id="send-email"
          name="email"
          placeholder="write here your email"
          value={email || ' '}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledButton type="submit">send</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

SendEmail.propTypes = {
  beers: PropTypes.array
};
