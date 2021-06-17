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
import { getTeamMembers } from '../../../functions/dashboard';

const AllTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

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
                Name: {member.name}
              </AllTeamName>
              <AllTeamText>
                Instagram: {member.instagram}
              </AllTeamText>
              <AllTeamText>
                Bio: {member.bio}
              </AllTeamText>
              {/* Update services later */}
              <AllTeamText>
                Services: {member.services}
              </AllTeamText>
            </AllTeamMemberContainer>
          ))}
        </AllTeamContent>
      </AllTeamWrap>
    </AllTeamContainer>
  )
};

export default AllTeam;