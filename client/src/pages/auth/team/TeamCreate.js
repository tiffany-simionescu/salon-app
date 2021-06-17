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
  const [name, setName] = useState('');
  // Change for cloudinary
  const [img, setImg] = useState('');
  const [instagram, setInstagram] = useState('');
  const [bio, setBio] = useState('');
  const [memberServices, setMemberServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [services, setServices] = useState([]);

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

    createTeamMember(user.token, { name, img, instagram, bio, memberServices })
    .then(res => {
      setLoading(false);
      setName('');
      setImg('');
      setInstagram('');
      setBio('');
      setMemberServices([]);
      toast.success(`The team member, ${name}, was created`);
      loadTeamMembers();
    })
    .catch(err => {
      setLoading(false);
      if (err.response.status === 400) {
        toast.error(err.response.data);
      }
    });
  };

  const handleRemove = async (slug) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setLoading(true);
      removeTeamMember(user.token, slug)
      .then(res => {
        setLoading(false);
        toast.error(`Team member ${res.data.name} was deleted`)
        loadTeamMembers();
      })
      .catch(err => {
        if (err.response.status === 400) {
          setLoading(false);
          toast.error(err.response.data);
        }
      });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
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

  const handleMemberServicesChange = (e) => {
    setMemberServices(e.target.value);
  };

  const isInvalid = name === '' ||
    name.length < 2 ||
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
            name={name}
            img={img}
            instagram={instagram}
            bio={bio}
            memberServices={memberServices}
            isInvalid={isInvalid}
          />
        </TeamCreateContent>
      </TeamCreateWrap>
    </TeamCreateContainer>
  )
};

export default TeamCreate;