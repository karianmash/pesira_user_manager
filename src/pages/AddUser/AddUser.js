import React from 'react';

import Header from '../../components/Header/Header';
import AddUser from '../../components/AddUserForm/AddUserForm';

function addUser({ addUser }) {
    return (
        <>
            <Header />
            <div className="container">
                <AddUser addUser={addUser} />
            </div>
        </>
    );
}

export default addUser;