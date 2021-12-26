/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context/authProvider';

import { Button, Registration, Form, InputWithLabel, Description } from '../../Components';
import { StyledCointanerInput, StyledDescriptionCointaner } from './Register.styled';

export const Register = () => {
  const { signUp } = useAuthContext();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [contentInputs, setContentInput] = useState({
    login: '',
    email: '',
    password: ''
  });

  const { login, email, password } = contentInputs;

  const checkEmail = (params) => {
    if (!params.email) {
      setIsValidEmail(false);
    } else if (!/\S+@\S+\.\S+/.test(params.email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  const checkPassword = (params) => {
    if (params.password.length < 7) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  };

  const handleChange = (e) => {
    setContentInput({ ...contentInputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    checkEmail(contentInputs);
    checkPassword(contentInputs);
  }, [isValidEmail, isValidPassword, contentInputs]);

  return (
    <Registration name="Rejestracja">
      <Form onSubmit={(e) => signUp(e, login, email, password)}>
        <InputWithLabel
          labelId="loginId"
          labelTitle="Login"
          name="login"
          placeholder="login"
          value={contentInputs.login || ' '}
          onChange={handleChange}
        />

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
        </StyledCointanerInput>
        <Button>Zarejestruj się</Button>
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
