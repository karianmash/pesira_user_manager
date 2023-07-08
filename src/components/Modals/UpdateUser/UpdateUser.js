import React, { useEffect, useState } from 'react';

import ResponseMessage from '../ResponseMessage/ResponseMessage';
import Loader from '../Loader/Loader';
import './UpdateUser.css';

function UpdateUser({ displayUpdateModal, closeModal, user, updateUser }) {
  const [displayResponseModal, setDisplayResponseModal] = useState('none');
  const [message, setMessage] = useState('User updated Successfully');
  const [responseType, setResponseType] = useState('Success');
  const [loader, setLoader] = useState('none');
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: ''
  });

  useEffect(() => {
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      company: user.company?.name,
      address: user.address?.street,
      city: user.address?.city
    });
  }, [user]);

  const closeResponseModal = () => {
    setDisplayResponseModal('none');
  };

  function validateFormData(userFormData) {
    const errors = {};

    if (userFormData.name.trim() === '') {
      errors.name = 'Name field is required';
    }

    if (userFormData.username.trim() === '') {
      errors.username = 'Username field is required';
    }

    if (userFormData.email.trim() === '') {
      errors.email = 'Email field is required';
    }

    if (userFormData.phone.trim() === '') {
      errors.phone = 'Phone field is required';
    }

    if (userFormData.company.name.trim() === '') {
      errors.company = 'Company field is required';
    }

    if (userFormData.address.street.trim() === '') {
      errors.street = 'Street field is required';
    }

    if (userFormData.address.city.trim() === '') {
      errors.city = 'City field is required';
    }

    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userFormData = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      company: {
        name: formData.company,
      },
      address: {
        street: formData.address,
        city: formData.city,
      },
    };

    const errors = validateFormData(userFormData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      closeModal();
      // setLoader('block');

      if (updateUser(formData, user.id)) {
        setFormData({
          name: '',
          username: '',
          email: '',
          phone: '',
          company: '',
          address: '',
          city: ''
        });
      }
    }
  }

  return (
    <>
      <div className="modal" style={{ display: displayUpdateModal }}>
        <div className="add-user">
          <div className="modal-header">
            <h3>Update User</h3>
            <span onClick={closeModal}>X</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              {formErrors.name && <small className="error-message">{formErrors.name}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
              {formErrors.username && <small className="error-message">{formErrors.username}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              {formErrors.email && <small className="error-message">{formErrors.email}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" id="phone" placeholder="Enter phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              {formErrors.phone && <small className="error-message">{formErrors.phone}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" className="form-control" id="company" placeholder="Enter company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              {formErrors.company && <small className="error-message">{formErrors.company}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              {formErrors.street && <small className="error-message">{formErrors.street}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" placeholder="Enter city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
              {formErrors.city && <small className="error-message">{formErrors.city}</small>}
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </form>
        </div>
      </div>

      <ResponseMessage
        displayResponseModal={displayResponseModal}
        closeResponseModal={closeResponseModal}
        responseType={responseType}
        message={message}
      />

      <Loader displayLoader={loader} />
    </>
  );
}

export default UpdateUser;