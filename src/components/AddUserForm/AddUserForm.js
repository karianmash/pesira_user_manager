import React from 'react';

import './AddUserForm.css';

function AddUser() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="add-user">
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                    <small id="fullNameHelp" className="form-text text-muted">User full name required</small>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                    <small id="usernameHelp" className="form-text text-muted">User username required</small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">User email required</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
                    <small id="phoneHelp" className="form-text text-muted">User phone required</small>
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" className="form-control" id="company" placeholder="Enter company" />
                    <small id="companyHelp" className="form-text text-muted">User company required</small>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Street Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" />
                    <small id="addressHelp" className="form-text text-muted">User address required</small>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default AddUser;