import React, { useState } from 'react';

import ResponseMessage from '../ResponseMessage/ResponseMessage';
import Loader from '../Loader/Loader';
import './UpdateUser.css';

function UpdateUser({ displayUpdateModal, closeModal }) {
  const [displayResponseModal, setDisplayResponseModal] = useState('none');
  const [message, setMessage] = useState('User updated Successfully');
  const [responseType, setResponseType] = useState('Success');
  const [loader, setLoader] = useState('none');

  const closeResponseModal = () => {
    setDisplayResponseModal('none');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    closeModal();

    // setDisplayResponseModal('block');
    setLoader('block');
  };

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
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
              <small id="fullNameHelp">User full name required</small>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" />
              <small id="usernameHelp">User username required</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
              <small id="emailHelp">User email required</small>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
              <small id="phoneHelp">User phone required</small>
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" className="form-control" id="company" placeholder="Enter company" />
              <small id="companyHelp">User company required</small>
            </div>
            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter address" />
              <small id="addressHelp">User address required</small>
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