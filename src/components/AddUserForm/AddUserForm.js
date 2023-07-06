import React, { useState } from 'react';

import ResponseMessage from '../Modals/ResponseMessage/ResponseMessage';
import Loader from '../Modals/Loader/Loader';

function AddUser({ addUser }) {
    const [displayResponseModal, setDisplayResponseModal] = useState('none');
    const [message, setMessage] = useState('');
    const [responseType, setResponseType] = useState('');
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

            // Post data to Typicode API
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Post request successful:', data);
                    addUser(data);
                    setLoader('none');
                    setDisplayResponseModal('block');
                    setMessage('User added successfully');
                    setResponseType('Success');
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setLoader('none');
                    setDisplayResponseModal('block');
                    setMessage('Failed to add user!');
                    setResponseType('Error');
                });
        }
    }

    return (
        <>
            <div className="add-user">
                <h3>Add User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter full name" />
                        {formErrors.name && <small className="error-message">{formErrors.name}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                        {formErrors.username && <small className="error-message">{formErrors.username}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        {formErrors.email && <small className="error-message">{formErrors.email}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
                        {formErrors.phone && <small className="error-message">{formErrors.phone}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" className="form-control" id="company" placeholder="Enter company" />
                        {formErrors.company && <small className="error-message">{formErrors.company}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Street Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter address" />
                        {formErrors.street && <small className="error-message">{formErrors.street}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" placeholder="Enter city" />
                        {formErrors.city && <small className="error-message">{formErrors.city}</small>}
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>

            <Loader displayLoader={loader} />

            <ResponseMessage
                displayResponseModal={displayResponseModal}
                closeResponseModal={closeResponseModal}
                responseType={responseType}
                message={message}
            />
        </>
    );
}

export default AddUser;