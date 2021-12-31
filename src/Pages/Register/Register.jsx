/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Registration, Form, InputWithLabel, Description } from '../../Components';
import {
  StyledCointanerInput,
  StyledDescriptionCointaner,
  StyledDescriptionError,
  StyledLoginCointaner
} from './Register.styled';
import { useSignUp } from '../../Services/useSignUp';
import { useValidate } from '../../Hooks/useValidate';
import { validateEmailRules } from '../../Utils/validateEmailRules';

export const Register = () => {
  const { signUp, resetMessage, message, loading } = useSignUp();

  const { values, errors, setErrors, handleSubmit, handleChange } = useValidate(
    signUp,
    validateEmailRules,
    resetMessage
  );

  console.log(values.login);

  return (
    <Registration name="Rejestracja">
      <Form onSubmit={handleSubmit}>
        <StyledLoginCointaner>
          <InputWithLabel
            labelId="loginId"
            labelTitle="Login"
            name="login"
            placeholder="login"
            value={values.login || ''}
            onChange={handleChange}
          />
          {errors.login && (
            <StyledDescriptionError error={errors.login} size="1rem">
              {errors.login}
            </StyledDescriptionError>
          )}
        </StyledLoginCointaner>
        <StyledCointanerInput isValid={!errors.email}>
          <InputWithLabel
            labelId="emailId"
            labelTitle="E-mail"
            type="email"
            name="email"
            placeholder="e-mail"
            value={values.email || ''}
            onChange={handleChange}
            autoComplete="on"
          />
          {!message && errors.email && (
            <StyledDescriptionError size="1rem" error={errors.email}>
              {errors.email}
            </StyledDescriptionError>
          )}
          {message && (
            <StyledDescriptionError size="1rem" error={errors.email}>
              {message}
            </StyledDescriptionError>
          )}
        </StyledCointanerInput>
        <StyledCointanerInput isValid={!errors.password}>
          <InputWithLabel
            labelId="passwordId"
            labelTitle="Password"
            type="password"
            name="password"
            placeholder="password"
            value={values.password || ''}
            onChange={handleChange}
            autoComplete="on"
          />
          <StyledDescriptionError error={errors.password} size="1rem">
            Password must be at least 7 characters
          </StyledDescriptionError>
        </StyledCointanerInput>
        {loading && <Description>Loading...</Description>}
        <Button type="submit">Zarejestruj się</Button>
        <StyledDescriptionCointaner>
          <Description>Masz już konto? </Description>
          <Description bold="true" as={Link} to={'/login'}>
            Zaloguj Się
          </Description>
        </StyledDescriptionCointaner>
      </Form>
    </Registration>
  );
};
