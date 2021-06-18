import React, { useEffect, useState } from 'react';
import {
  AllTeamContainer,
  AllTeamWrap,
  AllTeamNavContainer,
  AllTeamContent,
  AllTeamHeader,
  AllTeamMemberContainer,
  AllTeamName,
  AllTeamText
} from './AllTeamElements';
import UserNavbar from '../../../components/Navbar/UserNavbar';
import { 
  getTeamMembers, 
  removeTeamMember 
} from '../../../functions/dashboard';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AllTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = () => {
    getTeamMembers()
      .then(res => {
        setTeamMembers(res.data)
        console.log(res);
      });
  };

  const handleRemove = async (slug) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setLoading(true);
      removeTeamMember(user.token, slug)
      .then(res => {
        setLoading(false);
        toast.error(`Team member ${res.data.name} was deleted`)
        loadTeam();
      })
      .catch(err => {
        if (err.response.status === 400) {
          setLoading(false);
          toast.error(err.response.data);
        }
      });
    }
  };

  return (
    <AllTeamContainer>
      <AllTeamWrap>
        <AllTeamNavContainer>
          <UserNavbar />
        </AllTeamNavContainer>

        <AllTeamContent>
          <AllTeamHeader>Team Members</AllTeamHeader>
          {teamMembers.map(member => (
            <AllTeamMemberContainer key={member._id}>
              {/* Update with Cloudinary later */}
              <AllTeamText>
                Img: {member.img}
              </AllTeamText>
              <AllTeamName>
                Name: {member.memberName}
              </AllTeamName>
              <AllTeamText>
                Instagram: {member.instagram}
              </AllTeamText>
              <AllTeamText>
                Bio: {member.bio}
              </AllTeamText>
              <AllTeamText>
                Service: {member.service}
              </AllTeamText>
            </AllTeamMemberContainer>
          ))}
        </AllTeamContent>
      </AllTeamWrap>
    </AllTeamContainer>
  )
};

export default AllTeam;