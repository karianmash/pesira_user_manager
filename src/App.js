import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import AddUser from './pages/AddUser/AddUser';
import Home from './pages/Home/Home';

function App() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState('none');
  const [displayResponseModal, setDisplayResponseModal] = useState('none');
  const [message, setMessage] = useState('');
  const [responseType, setResponseType] = useState('');
  const [user, setUser] = useState({});

  // Get users
  useEffect(() => {
    setLoader('block');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoader('none');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoader('none');
        setDisplayResponseModal('block');
        setMessage('Error fetching data');
        setResponseType('Error');
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  // Add user
  const addUser = (user) => {
    setUsers([...users, user]);
  }

  // Get all users
  const getAllUsers = () => {
    return users;
  }

  // Get a user
  const getUser = (id) => {
    setLoader('block');

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('User fetched successfully:', data);
        setUser(data);
        setLoader('none');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoader('none');
        setDisplayResponseModal('block');
        setMessage('Failed to fetch user!');
        setResponseType('Error');
      });
  }

  // Update a user
  const updateUser = (id, formData) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User updated successfully:', data);
        setLoader('none');
        setDisplayResponseModal('block');
        setMessage('User updated successfully');
        setResponseType('Success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoader('none');
        setDisplayResponseModal('block');
        setMessage('Failed to update user!');
        setResponseType('Error');
      });

    // Update user locally
    // const updatedUsers = users.map((user) => {
    //   if (user.id === id) {
    //     setLoader('none');
    //     setDisplayResponseModal('block');
    //     setMessage('User updated successfully');
    //     setResponseType('Success');
    //     return {
    //       ...user,
    //       ...formData,
    //     };
    //   } else {
    //     setDisplayResponseModal('block');
    //     setMessage('Failed to update user!');
    //     setResponseType('Error');
    //     setLoader('none');
    //   }

    //   return user;
    // });
    // setUsers(updatedUsers);
    // return true;
  }

  // Delete a user
  const deleteUser = (id) => {
    setLoader('block');

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User deleted successfully:', data);
        setUsers(users.filter((user) => user.id !== id));
        setLoader('none');
        setDisplayResponseModal('block');
        setMessage('User deleted successfully');
        setResponseType('Success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoader('none');
        setDisplayResponseModal('block');
        setMessage('Failed to delete user!');
        setResponseType('Error');
      });
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <Home
          getAllUsers={getAllUsers}
          loader={loader}
          displayResponseModal={displayResponseModal}
          setDisplayResponseModal={setDisplayResponseModal}
          message={message}
          responseType={responseType}
          deleteUser={deleteUser}
          getUser={getUser}
          user={user}
          updateUser={updateUser}
        />} />
      <Route path="/create-user" element={<AddUser addUser={addUser} />} />
    </Routes>
  );
}

export default App;
