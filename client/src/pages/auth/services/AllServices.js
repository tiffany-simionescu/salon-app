import React, { useEffect, useState } from 'react';
import {
  AllServicesContainer,
  AllServicesWrap,
  AllServicesNavContainer,
  AllServicesContent,
  AllServicesHeader,
  SingleServiceContainer,
  AllServicesName,
  AllServicesLink,
  AllServicesDelete
} from './AllServicesElements';
import UserNavbar from '../../../components/Navbar/UserNavbar';
import { 
  getServices, 
  removeService 
} from '../../../functions/dashboard';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    getServices()
      .then(res => {
        setServices(res.data)
        console.log(res);
      });
  };

  const handleRemove = (slug) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setLoading(true);
      removeService(user.token, slug)
      .then(res => {
        setLoading(false);
        toast.error(`${res.data.name} has been removed.`);
        loadServices();
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
    <AllServicesContainer>
      <AllServicesWrap>
        <AllServicesNavContainer>
          <UserNavbar />
        </AllServicesNavContainer>

        <AllServicesContent>
          {loading ? (
            <AllServicesHeader>Loading...</AllServicesHeader>
          ) : (
            <AllServicesHeader>Services</AllServicesHeader>
          )}
          {services.map(service => (
            <SingleServiceContainer key={service._id}>
              <AllServicesName>
                Name: {service.name}
              </AllServicesName>
              <AllServicesLink 
                to={`/dashboard/services/${service.slug}`}
              >
                Edit
              </AllServicesLink>
              <AllServicesDelete 
                onClick={() => handleRemove(service.slug)}
              />
            </SingleServiceContainer>
          ))}
        </AllServicesContent>
      </AllServicesWrap>
    </AllServicesContainer>
  )
};

export default AllServices;