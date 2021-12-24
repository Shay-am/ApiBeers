/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledDescription } from './Login.styled';
import { Button, Description, Registration, Form, InputWithLabel } from '../../Components';

export const Login = () => {
  const [contentInputs, setContentInput] = useState({
    login: '',
    password: ''
  });

  const handleChange = (e) => {
    setContentInput({ ...contentInputs, [e.target.name]: e.target.value });
  };

  return (
    <Registration name="Zaloguj Się">
      <Form>
        <InputWithLabel
          labelId="login-id"
          labelTitle="Login"
          name="login"
          placeholder="login"
          onChange={handleChange}
        />
        <InputWithLabel
          labelId="password-id"
          labelTitle="Password"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          autocomplete="on"
        />
        <Button>Zaloguj Się</Button>
        <StyledDescription>
          <Description>Nie masz jeszcze konta ? </Description>
          <Description bold as={Link} to={'/register'}>
            Zarejestruj się
          </Description>
        </StyledDescription>
      </Form>
    </Registration>
  );
};
