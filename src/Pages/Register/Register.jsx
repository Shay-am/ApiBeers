import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkEmail, checkPassword } from '../../Utils/validation';
import { Button, Registration, Form, InputWithLabel, Description } from '../../Components';
import {
  StyledCointanerInput,
  StyledDescriptionCointaner,
  StyledDescriptionError,
  StyledLoginCointaner
} from './Register.styled';
import { useSignUp } from '../../Services/useSignUp';

export const Register = () => {
  const { signUp, error, message, loading } = useSignUp();

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [contentInputs, setContentInput] = useState({
    login: '',
    email: '',
    password: ''
  });

  const { login, email, password } = contentInputs;

  const handleChange = (e) => {
    setContentInput({ ...contentInputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      checkEmail(contentInputs, setIsValidEmail);
      checkPassword(contentInputs, setIsValidPassword);
    }
    return () => {
      isCancelled = true;
    };
  }, [isValidEmail, isValidPassword, contentInputs]);

  return (
    <Registration name="Rejestracja">
      <Form onSubmit={(e) => signUp(e, login, email, password)}>
        <StyledLoginCointaner>
          <InputWithLabel
            labelId="loginId"
            labelTitle="Login"
            name="login"
            placeholder="login"
            value={contentInputs.login || ' '}
            onChange={handleChange}
          />
          <Description size="1rem">Usernames must be at least 3 characters</Description>
        </StyledLoginCointaner>
        <StyledCointanerInput isValid={isValidEmail}>
          <InputWithLabel
            labelId="emailId"
            labelTitle="E-mail"
            type="e-mail"
            name="email"
            placeholder="e-mail"
            value={contentInputs.email || ' '}
            onChange={(e) => handleChange(e)}
            autoComplete="true"
          />
        </StyledCointanerInput>
        <StyledCointanerInput isValid={isValidPassword}>
          <InputWithLabel
            labelId="passwordId"
            labelTitle="Password"
            type="password"
            name="password"
            placeholder="password"
            value={contentInputs.password || ''}
            onChange={handleChange}
            autoComplete="on"
          />
          <Description size="1rem">Password must be at least 5 characters</Description>
        </StyledCointanerInput>
        {loading && <Description>Loading...</Description>}
        {!loading && message && (
          <StyledDescriptionError error={error}>{message}</StyledDescriptionError>
        )}
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
