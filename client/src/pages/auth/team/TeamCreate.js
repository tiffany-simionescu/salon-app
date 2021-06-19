import React, { useState, useEffect } from 'react';
import UserNavbar from '../../../components/Navbar/UserNavbar';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  getTeamMembers,
  createTeamMember,
  removeTeamMember,
} from '../../../functions/dashboard';
import TeamCreateForm from '../../../components/Forms/TeamCreateForm';
import {
  TeamCreateContainer,
  TeamCreateWrap,
  TeamCreateNavContainer,
  TeamCreateContent,
  TeamCreateHeader
} from './TeamCreateElements';

const initialState = {
  memberName: '',
  img: '',
  instagram: '',
  bio: '',
  memberService: '',
}

const TeamCreate = ({ history }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = () => {
    getTeamMembers().then(res => setTeamMembers(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createTeamMember(user.token, values)
    .then(res => {
      setLoading(false);
      toast.success(`The team member, ${res.data.memberName}, was created`);
      history.push('/dashboard/team')
    })
    .catch(err => {
      setLoading(false);
      console.log(err);
      // if (err.response.status === 400) {
      //   toast.error(err.response.data);
      // }
    });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleNameChange = (n) => {
    // setMemberName(e.target.value);
    setValues({ ...values, memberName: n })
  };

  const handleImgChange = (i) => {
    // setImg(e.target.value);
    setValues({ ...values, img: i })
  };

  const handleInstagramChange = (i) => {
    // setInstagram(e.target.value);
    setValues({ ...values, instagram: i })
  };

  const handleBioChange = (b) => {
    // setBio(e.target.value);
    setValues({ ...values, bio: b })
  };

  // const serviceOptions = services.map(function (s) {
  //   // return s.serviceName;
  //   return { value: s.serviceName, label: s.serviceName }
  //   // return { slug: s.slug, serviceName: s.serviceName, label: s.serviceName }
  // });
  
  const handleMemberServiceChange = (ms) => {
    setValues({ ...values, memberService: ms });
  };

  const isInvalid = values === '';

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

          <TeamCreateForm 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleNameChange={handleNameChange}
            handleImgChange={handleImgChange}
            handleInstagramChange={handleInstagramChange}
            handleBioChange={handleBioChange}
            handleMemberServiceChange={handleMemberServiceChange}
            isInvalid={isInvalid}
          />
        </TeamCreateContent>
      </TeamCreateWrap>
    </TeamCreateContainer>
  )
};

export default TeamCreate;