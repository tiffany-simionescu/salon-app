import React from 'react';
import {
  ServicesContainer,
  ServicesWrap,
  ServicesHeader,
  ServicesInput,
  Button,
  ServicesLink,
  ServicesInputContainer
} from './ServicesFormElements';

const ServicesForm = ({ 
  handleSubmit,
  handleNameChange,
  serviceName,
  isInvalid
}) => {
  return (
    <ServicesContainer onSubmit={handleSubmit}>
      <ServicesWrap>
        <ServicesHeader>Add Service</ServicesHeader>
        <ServicesInputContainer>
            <ServicesInput
              type="text"
              value={serviceName}
              onChange={handleNameChange} 
              placeholder="Name"
              autoFocus
            />
        </ServicesInputContainer>
        <Button disabled={isInvalid}>Add Service</Button>
        <ServicesLink to="/dashboard">Cancel</ServicesLink>
      </ServicesWrap>
    </ServicesContainer>
  );
};

export default ServicesForm;