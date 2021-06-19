import React from 'react';
// import { Select } from 'antd';
// import Select from 'react-select';
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
} from './TeamFormElements';

// const { Option } = Select;

const TeamForm = ({ 
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleNameChange,
  handleImgChange,
  handleInstagramChange,
  handleBioChange,
  handleMemberServiceChange,
  setServiceArray,
  // setMemberService,
  // memberName,
  // img,
  // instagram,
  // bio,
  services,
  // memberService,
  isInvalid,
  serviceOptions,
  serviceArray
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
              // onChange={handleImgChange}
              // onChange={handleChange}
              // onChange={target => setValues({ ...values, img: target.value })}
              placeholder="Image URL"
            />
            <TeamInput
              type="text"
              value={memberName}
              onChange={e => handleNameChange(e.target.value)}
              // onChange={handleNameChange}
              // onChange={handleChange}
              // onChange={target => setValues({ ...values, memberName: target.value })} 
              placeholder="Name"
              autoFocus
            />
            <TeamInput
              type="text" 
              value={instagram}
              onChange={e => handleInstagramChange(e.target.value)}
              // onChange={handleInstagramChange}
              // onChange={handleChange}
              // onChange={target => setValues({ ...values, instagram: target.value })}
              placeholder="Instagram"
            />
            <TeamInput
              type="textarea" 
              value={bio}
              onChange={e => handleBioChange(e.target.value)}
              // onChange={handleBioChange}
              // onChange={handleChange}
              // onChange={target => setValues({ ...values, bio: target.value })}
              placeholder="About Team Member"
            />
            {/* <TeamSelect 
              value={memberService}
              options={serviceOptions} 
              // onChange={value => setValues({ ...values, memberService: value })}
              // onChange={handleChange}
              // onChange={e => handleMemberServiceChange(e)}
              onChange={e => handleMemberServiceChange(e.target.value)}
              // onChange={setServiceArray}
              // onChange={setMemberService}
              labelledBy="Select" 
            /> */}
              <TeamLabel>Service</TeamLabel>
              <TeamSelect 
                name="category" 
                className="form-control"
                value={memberService}
                onChange={e => setValues({ ...values, memberService: e.target.value})}
                // onChange={e => handleMemberServiceChange(e.target.value)}
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

export default TeamForm;