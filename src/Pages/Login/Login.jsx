import React from 'react';
import { StyledDescription } from './Login.styled';
import { Button, Description, Registration, Form } from '../../Components';
import { InputWithLabel } from '../../Components/Molekules/InputWithLabel/InputWithLabel';

export const Login = () => {
  return (
    <Registration name="Zaloguj Się">
      <Form>
        <InputWithLabel labelId="login-id" labelTitle="Login" name="login" placeholder="login" />
        <InputWithLabel
          labelId="password-id"
          labelTitle="Password"
          type="password"
          name="password"
          placeholder="password"
          autocomplete="on"
        />
        <Button>Zaloguj Się</Button>
        <StyledDescription>
          <Description>Nie masz jeszcze konta ? </Description>
          <Description bold> Zarejestruj się</Description>
        </StyledDescription>
      </Form>
    </Registration>
  );
};
