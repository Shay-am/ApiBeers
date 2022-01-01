import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Registration, Form, InputWithLabel, Description } from 'Components';
import {
  StyledCointanerInput,
  StyledDescriptionCointaner,
  StyledLoginCointaner
} from './Register.styled';
import { useSignUp } from 'Api/Auth/useSignUp';
import { useValidate } from 'Hooks/useValidate';
import { validateEmailRules } from 'Utils/validateEmailRules';

export const Register = () => {
  const { signUp, resetMessage, message, loading } = useSignUp();
  const { values, errors, handleSubmit, handleChange } = useValidate(
    signUp,
    validateEmailRules,
    resetMessage
  );

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
            <Description error={errors.login} size="1rem">
              {errors.login}
            </Description>
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
            <Description size="1rem" error={errors.email}>
              {errors.email}
            </Description>
          )}
          {message && (
            <Description size="1rem" error={errors.email}>
              {message}
            </Description>
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
          <Description error={errors.password} size="1rem">
            Password must be at least 7 characters
          </Description>
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
