import React, { useState, useEffect } from 'react';
import UserNavbar from '../../../components/Navbar/UserNavbar';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  getTeamMember,
  updateTeamMember
} from '../../../functions/dashboard';
import TeamUpdateForm from '../../../components/Forms/TeamUpdateForm';
import {
  TeamUpdateContainer,
  TeamUpdateWrap,
  TeamUpdateNavContainer,
  TeamUpdateContent,
  TeamUpdateHeader
} from './TeamUpdateElements';

const initialState = {
  memberName: '',
  img: '',
  instagram: '',
  bio: '',
  memberService: '',
}

const TeamUpdate = ({ match, history }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  // const [teamMembers, setTeamMembers] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));
  const { slug } = match.params;

  useEffect(() => {
    loadTeamMember();
  }, []);

  const loadTeamMember = () => {
    getTeamMember(slug).then(res => setValues({ ...values, ...res.data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    updateTeamMember(user.token, slug, values)
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
    <TeamUpdateContainer>
      <TeamUpdateWrap>
        <TeamUpdateNavContainer>
          <UserNavbar />
        </TeamUpdateNavContainer>

        <TeamUpdateContent>
          {loading ? (
            <TeamUpdateHeader>
              Loading...
            </TeamUpdateHeader>
          ) : (
            <TeamUpdateHeader>
              Update Team Member
            </TeamUpdateHeader>
          )}

          <TeamUpdateForm 
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
        </TeamUpdateContent>
      </TeamUpdateWrap>
    </TeamUpdateContainer>
  )
};

export default TeamUpdate;