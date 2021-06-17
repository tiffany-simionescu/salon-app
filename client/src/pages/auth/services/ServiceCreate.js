import React, { useState, useEffect } from 'react';
import UserNavbar from '../../../components/Navbar/UserNavbar';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  getServices,
  createService,
} from '../../../functions/dashboard';
import ServicesForm from '../../../components/Forms/ServicesForm';
import {
  ServiceCreateContainer,
  ServiceCreateWrap,
  ServiceCreateNavContainer,
  ServiceCreateContent,
  ServiceCreateHeader
} from './ServiceCreateElements';

const ServiceCreate = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    getServices().then(res => setServices(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createService(user.token, { name })
    .then(res => {
      setLoading(false);
      setName('');
      toast.success(`${name} service was created`);
      loadServices();
    })
    .catch(err => {
      setLoading(false);
      if (err.response.status === 400) {
        toast.error(err.response.data);
      }
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const isInvalid = name === '' || name.length < 2;

  return (
    <ServiceCreateContainer>
      <ServiceCreateWrap>
        <ServiceCreateNavContainer>
          <UserNavbar />
        </ServiceCreateNavContainer>

        <ServiceCreateContent>
          {loading ? (
            <ServiceCreateHeader>
              Loading...
            </ServiceCreateHeader>
          ) : (
            <ServiceCreateHeader>
              Create Service
            </ServiceCreateHeader>
          )}

          <ServicesForm 
            handleSubmit={handleSubmit}
            handleNameChange={handleNameChange}
            name={name}
            isInvalid={isInvalid}
          />
        </ServiceCreateContent>
      </ServiceCreateWrap>
    </ServiceCreateContainer>
  )
};

export default ServiceCreate;