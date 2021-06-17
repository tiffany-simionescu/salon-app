import React from 'react';
import {
  TeamContainer,
  TeamWrap,
  TeamHeader,
  TeamInput,
  Button,
  TeamLink,
  TeamInputContainer
} from './TeamFormElements';

const TeamForm = ({ 
  handleSubmit,
  handleNameChange,
  handleImgChange,
  handleInstagramChange,
  handleBioChange,
  handleMemberServicesChange,
  name,
  img,
  instagram,
  bio,
  memberServices,
  isInvalid
}) => {
  return (
    <TeamContainer onSubmit={handleSubmit}>
      <TeamWrap>
        <TeamHeader>Add Team Member</TeamHeader>
        <TeamInputContainer>
            {/* Image Upload goes here */}
            <TeamInput 
              type="text"
              value={img}
              onChange={handleImgChange}
              placeholder="Image URL"
            />
            <TeamInput
              type="text"
              value={name}
              onChange={handleNameChange} 
              placeholder="Name"
              autoFocus
            />
            <TeamInput
              type="text" 
              value={instagram}
              onChange={handleInstagramChange}
              placeholder="Instagram"
            />
            <TeamInput
              type="textarea" 
              value={bio}
              onChange={handleBioChange}
              placeholder="About Team Member"
            />
            {/* Select multiple services */}
            <TeamInput
              type="text" 
              value={memberServices}
              onChange={handleMemberServicesChange}
              placeholder="Service"
            />
        </TeamInputContainer>
        <Button disabled={isInvalid}>Add Team Member</Button>
        <TeamLink to="/dashboard">Cancel</TeamLink>
      </TeamWrap>
    </TeamContainer>
  );
};

export default TeamForm;