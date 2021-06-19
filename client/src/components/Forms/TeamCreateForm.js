import React from 'react';
import {
  TeamContainer,
  TeamWrap,
  TeamHeader,
  TeamInput,
  Button,
  TeamLink,
  TeamInputContainer,
  TeamLabel,
  TeamSelect,
  TeamOption,
} from './TeamCreateFormElements';

const TeamCreateForm = ({ 
  handleSubmit,
  setValues,
  values,
  handleNameChange,
  handleImgChange,
  handleInstagramChange,
  handleBioChange,
  isInvalid,
}) => {

  const {
    memberName,
    img,
    instagram,
    bio,
    memberService
  } = values;

  return (
    <TeamContainer onSubmit={handleSubmit}>
      <TeamWrap>
        <TeamHeader>Add Team Member</TeamHeader>
        <TeamInputContainer>
            {/* Image Upload goes here */}
            <TeamInput 
              type="text"
              value={img}
              onChange={e => handleImgChange(e.target.value)}
              placeholder="Image URL"
            />
            <TeamInput
              type="text"
              value={memberName}
              onChange={e => handleNameChange(e.target.value)}
              placeholder="Name"
              autoFocus
            />
            <TeamInput
              type="text" 
              value={instagram}
              onChange={e => handleInstagramChange(e.target.value)}
              placeholder="Instagram"
            />
            <TeamInput
              type="textarea" 
              value={bio}
              onChange={e => handleBioChange(e.target.value)}
              placeholder="About Team Member"
            />
              <TeamLabel>Service</TeamLabel>
              <TeamSelect 
                name="category" 
                className="form-control"
                value={memberService}
                onChange={e => setValues({ ...values, memberService: e.target.value})}
              >
                <TeamOption>Please Select</TeamOption>
                <TeamOption value="Hair / Color">Hair / Color</TeamOption>
                <TeamOption value="Waxing">Waxing</TeamOption>
                <TeamOption value="Lashes">Lashes</TeamOption>
              </TeamSelect>
        </TeamInputContainer>
        <Button disabled={isInvalid}>Add Team Member</Button>
        <TeamLink to="/dashboard">Cancel</TeamLink>
      </TeamWrap>
    </TeamContainer>
  );
};

export default TeamCreateForm;