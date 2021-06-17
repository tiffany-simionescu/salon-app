import React, { useState, useEffect } from 'react';
import UserNavbar from '../../../components/Navbar/UserNavbar';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  getTeamMembers,
  createTeamMember,
  removeTeamMember,
  getServices
} from '../../../functions/dashboard';
import TeamForm from '../../../components/Forms/TeamForm';
import {
  TeamCreateContainer,
  TeamCreateWrap,
  TeamCreateNavContainer,
  TeamCreateContent,
  TeamCreateHeader
} from './TeamCreateElements';

const TeamCreate = () => {
  const [memberName, setMemberName] = useState('');
  // Change for cloudinary
  const [img, setImg] = useState('');
  const [instagram, setInstagram] = useState('');
  const [bio, setBio] = useState('');
  const [memberServices, setMemberServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [services, setServices] = useState([]);
  const [checked, setChecked] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadTeamMembers();
    loadServices();
  }, []);

  const loadTeamMembers = () => {
    getTeamMembers().then(res => setTeamMembers(res.data));
  };

  const loadServices = () => {
    getServices().then(res => setServices(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createTeamMember(user.token, { memberName, img, instagram, bio, memberServices })
    .then(res => {
      setLoading(false);
      setMemberName('');
      setImg('');
      setInstagram('');
      setBio('');
      setMemberServices([]);
      toast.success(`The team member, ${memberName}, was created`);
      loadTeamMembers();
    })
    .catch(err => {
      setLoading(false);
      if (err.response.status === 400) {
        toast.error(err.response.data);
      }
    });
  };

  const handleNameChange = (e) => {
    setMemberName(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  const handleInstagramChange = (e) => {
    setInstagram(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleCheckChange = () => {
    setChecked(!checked);
  }

  const handleMemberServicesChange = (e) => {
    setChecked(!checked);
    if (checked) {
      setMemberServices(e.target.value);
    }
    console.log(e.target.value);
  };

  const isInvalid = memberName === '' ||
    memberName.length < 2 ||
    img === '' ||
    instagram === '' ||
    bio === '' ||
    memberServices === '';

  return (
    <TeamCreateContainer>
      <TeamCreateWrap>
        <TeamCreateNavContainer>
          <UserNavbar />
        </TeamCreateNavContainer>

        <TeamCreateContent>
          {loading ? (
            <TeamCreateHeader>
              Loading...
            </TeamCreateHeader>
          ) : (
            <TeamCreateHeader>
              Create Team Member
            </TeamCreateHeader>
          )}

          <TeamForm 
            handleSubmit={handleSubmit}
            handleNameChange={handleNameChange}
            handleImgChange={handleImgChange}
            handleInstagramChange={handleInstagramChange}
            handleBioChange={handleBioChange}
            handleMemberServicesChange={handleMemberServicesChange}
            handleCheckChange={handleCheckChange}
            memberName={memberName}
            img={img}
            instagram={instagram}
            bio={bio}
            services={services}
            checked={checked}
            memberServices={memberServices}
            isInvalid={isInvalid}
          />
        </TeamCreateContent>
      </TeamCreateWrap>
    </TeamCreateContainer>
  )
};

export default TeamCreate;