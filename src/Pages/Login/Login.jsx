/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledDescription } from './Login.styled';
import { Button, Description, Registration, Form, InputWithLabel } from '../../Components';
import { useLogin } from '../../Services/useLogin';
import { StyledDescriptionError } from '../Register/Register.styled';

export const Login = () => {
  const { signIn, loading, error } = useLogin();

  const [contentInputs, setContentInput] = useState({
    login: '',
    password: ''
  });

  const { login, password } = contentInputs;

  const handleChange = (e) => {
    setContentInput({ ...contentInputs, [e.target.name]: e.target.value });
  };

  return (
    <Registration name="Zaloguj Się">
      <Form onSubmit={(e) => signIn(e, login, password)}>
        <InputWithLabel
          labelId="login-id"
          labelTitle="Login"
          name="login"
          placeholder="login"
          autoComplete="user-login"
          onChange={handleChange}
        />
        <div>
          <InputWithLabel
            labelId="password-id"
            labelTitle="Password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
        {loading && <Description>Loading...</Description>}
        {error && (
          <StyledDescriptionError>
            The username or password is incorrect. Try again!!!
          </StyledDescriptionError>
        )}
        <Button type="submit">Zaloguj Się</Button>
        <StyledDescription>
          <Description>Nie masz jeszcze konta ? </Description>
          <Description bold="true" as={Link} to={'/register'}>
            Zarejestruj się
          </Description>
        </StyledDescription>
      </Form>
    </Registration>
  );
};
