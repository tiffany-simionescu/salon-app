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
  const [serviceName, setServiceName] = useState('');
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadServices();
    console.log('getServices --> ', services);
  }, []);

  const loadServices = () => {
    getServices().then(res => setServices(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createService(user.token, { serviceName })
    .then(res => {
      setLoading(false);
      setServiceName('');
      toast.success(`${serviceName} service was created`);
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
    setServiceName(e.target.value);
  };

  const isInvalid = serviceName === '' || serviceName.length < 2;

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
            serviceName={serviceName}
            isInvalid={isInvalid}
          />
        </ServiceCreateContent>
      </ServiceCreateWrap>
    </ServiceCreateContainer>
  )
};

export default ServiceCreate;