import React from 'react';
import {
  RegCompleteContainer,
  RegCompleteWrap,
  RegCompleteHeader,
  RegCompleteInput,
  Button
} from './RegisterCompleteFormElements';

const RegisterCompleteForm = ({ handleSubmit, email, name, setName, password, setPassword}) => {
  return (
    <RegCompleteContainer onSubmit={handleSubmit}>
      <RegCompleteWrap>
        <RegCompleteHeader>Complete Registration</RegCompleteHeader>
        <RegCompleteInput 
          type="email"
          value={email}
          disabled
        />
        <RegCompleteInput 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          autofocus
        />
        <RegCompleteInput 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="submit">
          Complete Registration
        </Button>
      </RegCompleteWrap>
    </RegCompleteContainer>
  );
};

export default RegisterCompleteForm;