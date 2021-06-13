import React from 'react';
import {
  RegisterContainer,
  RegisterWrap,
  RegisterHeader,
  RegisterInput,
  Button,
  RegisterLink,
  RegisterText,
} from './RegisterFormElements';

const RegisterForm = ({ handleSubmit, setEmail, email, isInvalid }) => {
  return (
    <RegisterContainer onSubmit={handleSubmit}>
      <RegisterWrap>
        <RegisterHeader>Register</RegisterHeader>
        <RegisterInput
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)} 
          placeholder="Email address"
          autoFocus
        />
        <Button 
          type="submit" 
          disabled={isInvalid}
        >
          Register
        </Button>
        <RegisterText>
          Have an Account?<br /><br />
          <RegisterLink to="/login">Login</RegisterLink>
        </RegisterText>
        <RegisterLink to="/">Cancel</RegisterLink>
      </RegisterWrap>
    </RegisterContainer>
  );
};

export default RegisterForm;