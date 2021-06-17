import React from 'react';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  UserNavbarContainer,
  UserNavbarWrap,
  UserNavbarItem,
  UserNavbarLink,
} from './UserNavbarElements';

const UserNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null
    });
    history.push("/login")
  };

  return (
    <UserNavbarContainer>
      <UserNavbarWrap>
        <UserNavbarItem>
          <UserNavbarLink to="/dashboard">
            Dashboard
          </UserNavbarLink>
        </UserNavbarItem>

        <UserNavbarItem>
          <UserNavbarLink to="/dashboard/team">
            Team Members
          </UserNavbarLink>
        </UserNavbarItem>

        <UserNavbarItem>
          <UserNavbarLink to="/dashboard/create-team-member">
            Add Team Member
          </UserNavbarLink>
        </UserNavbarItem>

        <UserNavbarItem>
          <UserNavbarLink to="/dashboard/services">
            Services
          </UserNavbarLink>
        </UserNavbarItem>

        <UserNavbarItem>
          <UserNavbarLink to="/dashboard/create-service">
            Add Service
          </UserNavbarLink>
        </UserNavbarItem>

        <UserNavbarItem>
          <UserNavbarLink to="/dashboard/password">
            Password
          </UserNavbarLink>
        </UserNavbarItem>
      </UserNavbarWrap>
    </UserNavbarContainer>
  );
};

export default UserNavbar;