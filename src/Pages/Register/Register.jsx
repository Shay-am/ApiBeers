import React from 'react';

import { Button, Registration, Form } from '../../Components';
import { InputWithLabel } from '../../Components/Molekules/InputWithLabel/InputWithLabel';

export const Register = () => {
  return (
    <Registration name="Rejestracja">
      <Form>
        <InputWithLabel labelId="login-id" labelTitle="Login" name="login" placeholder="login" />
        <InputWithLabel
          labelId="email-id"
          labelTitle="E-mail"
          type="e-mail"
          name="e-mail"
          placeholder="e-mail"
          autoComplete
        />
        <InputWithLabel
          labelId="password-id"
          labelTitle="Password"
          type="password"
          name="password"
          placeholder="password"
          autoComplete
        />
        <Button>Zarejestruj się</Button>
      </Form>
    </Registration>
  );
};
