import React from 'react';
import {
  AllServicesContainer,
  AllServicesWrap,
  AllServicesNavContainer,
  AllServicesContent,
  AllServicesHeader,
} from './AllServicesElements';
import UserNavbar from '../../../components/Navbar/UserNavbar';

const AllServices = () => {
  return (
    <AllServicesContainer>
      <AllServicesWrap>
        <AllServicesNavContainer>
          <UserNavbar />
        </AllServicesNavContainer>

        <AllServicesContent>
          <AllServicesHeader>Services</AllServicesHeader>
          {/* Services go here */}
          <p>Service 1</p>
          <p>Service 2</p>
          <p>Service 3</p>
        </AllServicesContent>
      </AllServicesWrap>
    </AllServicesContainer>
  )
};

export default AllServices;