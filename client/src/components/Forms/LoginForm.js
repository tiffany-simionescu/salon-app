import React from 'react';
import {
  LoginContainer,
  LoginWrap,
  LoginHeader,
  LoginInput,
  Button,
  GoogleButton,
  LoginLink,
  LoginText
} from './LoginFormElements';

const LoginForm = ({ handleSubmit, setEmail, setPassword, isInvalid }) => {
  return (
    <LoginContainer onSubmit={handleSubmit}>
      <LoginWrap>
        <LoginHeader>Login</LoginHeader>
        <LoginInput
          type="email"
          onChange={e => setEmail(e.target.value)} 
          placeholder="Email address"
          autoFocus
        />
        <LoginInput
          type="password" 
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button disabled={isInvalid}>Login</Button>
        <LoginText>
          Need an Account?<br /><br />
          <LoginLink to="/register">Register</LoginLink>
        </LoginText>
        <LoginLink to="/">Cancel</LoginLink>
      </LoginWrap>
    </LoginContainer>
  );
};

export default LoginForm;