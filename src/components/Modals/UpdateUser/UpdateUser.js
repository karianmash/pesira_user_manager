import React, { useState } from 'react';

import ResponseMessage from '../ResponseMessage/ResponseMessage';
import Loader from '../Loader/Loader';
import './UpdateUser.css';

function UpdateUser({ displayUpdateModal, closeModal, user, updateUser }) {
  const [displayResponseModal, setDisplayResponseModal] = useState('none');
  const [message, setMessage] = useState('User updated Successfully');
  const [responseType, setResponseType] = useState('Success');
  const [loader, setLoader] = useState('none');
  const [formErrors, setFormErrors] = useState({});

  const closeResponseModal = () => {
    setDisplayResponseModal('none');
  };

  function validateFormData(formData) {
    const errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Name field is required';
    }

    if (formData.username.trim() === '') {
      errors.username = 'Username field is required';
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email field is required';
    }

    if (formData.phone.trim() === '') {
      errors.phone = 'Phone field is required';
    }

    if (formData.company.name.trim() === '') {
      errors.company = 'Company field is required';
    }

    if (formData.address.street.trim() === '') {
      errors.street = 'Street field is required';
    }

    if (formData.address.city.trim() === '') {
      errors.city = 'City field is required';
    }

    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      company: {
        name: event.target.company.value,
      },
      address: {
        street: event.target.address.value,
        city: event.target.city.value,
      },
    };

    const errors = validateFormData(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setLoader('block');

      updateUser(formData, user.id)
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
              <input type="text" className="form-control" id="name" placeholder="Enter full name" value={user.name} />
              {formErrors.name && <small className="error-message">{formErrors.name}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" value={user.username} />
              {formErrors.username && <small className="error-message">{formErrors.username}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={user.email} />
              {formErrors.email && <small className="error-message">{formErrors.email}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" id="phone" placeholder="Enter phone" value={user.phone} />
              {formErrors.phone && <small className="error-message">{formErrors.phone}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" className="form-control" id="company" placeholder="Enter company" value={user.company?.name} />
              {formErrors.company && <small className="error-message">{formErrors.company}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter address" value={user.address?.street} />
              {formErrors.street && <small className="error-message">{formErrors.street}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" placeholder="Enter city" value={user.address?.city} />
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