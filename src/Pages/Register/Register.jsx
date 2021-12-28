import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkEmail, checkPassword } from '../../Utils/validation';
import { Button, Registration, Form, InputWithLabel, Description } from '../../Components';
import {
  StyledCointanerInput,
  StyledDescriptionCointaner,
  StyledDescriptionError
} from './Register.styled';
import { signUp } from '../../Services/signUp';

export const Register = () => {
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const [contentInputs, setContentInput] = useState({
    login: '',
    email: '',
    password: ''
  });

  const { login, email, password } = contentInputs;

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const newUser = await signUp(login, email, password);
      if (newUser) {
        navigate('/login');
        setMessage(newUser.data.message);
      }
    } catch (error) {
      setError(error.response.data.err);
    }
  };

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
  }, [isValidEmail, isValidPassword, contentInputs, error, message]);

  return (
    <Registration name="Rejestracja">
      <Form onSubmit={(e) => handleSignUp(e)}>
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
        {message && <Description>{message}</Description>}
        {error && <StyledDescriptionError>{error}</StyledDescriptionError>}
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
