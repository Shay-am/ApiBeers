import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledDescription } from './Login.styled';
import { Button, Description, Registration, Form, InputWithLabel } from '../../Components';

import { useAuthContext } from '../../Context/authProvider';

export const Login = () => {
  const { LogIn } = useAuthContext();
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
      <Form onSubmit={(e) => LogIn(e, login, password)} autoComplete="on">
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
