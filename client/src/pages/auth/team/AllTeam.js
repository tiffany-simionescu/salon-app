import React from 'react';
import {
  AllTeamContainer,
  AllTeamWrap,
  AllTeamNavContainer,
  AllTeamContent,
  AllTeamHeader,
} from './AllTeamElements';
import UserNavbar from '../../../components/Navbar/UserNavbar';

const AllTeam = () => {
  return (
    <AllTeamContainer>
      <AllTeamWrap>
        <AllTeamNavContainer>
          <UserNavbar />
        </AllTeamNavContainer>

        <AllTeamContent>
          <AllTeamHeader>Team Members</AllTeamHeader>
          {/* Team Members go here */}
          <p>Team Member 1</p>
          <p>Team Member 2</p>
          <p>Team Member 3</p>
        </AllTeamContent>
      </AllTeamWrap>
    </AllTeamContainer>
  )
};

export default AllTeam;