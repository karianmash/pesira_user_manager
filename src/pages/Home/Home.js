import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import UpdateUser from '../../components/Modals/UpdateUser/UpdateUser';

function Home({ getAllUsers, loader, displayResponseModal, setDisplayResponseModal, message, responseType, deleteUser, getUser, user, updateUser }) {
    const [displayUpdateModal, setdisplayUpdateModal] = useState('none');

    const showUpdateUserModal = (number) => () => {
        setdisplayUpdateModal('block');
        getUser(number);
    };

    const closeModal = () => {
        setdisplayUpdateModal('none');
    };

    return (
        <>
            <UpdateUser displayUpdateModal={displayUpdateModal} closeModal={closeModal} user={user} updateUser={updateUser} />
            <Header />
            <div className="container">
                <Table
                    showUpdateUserModal={showUpdateUserModal}
                    getAllUsers={getAllUsers}
                    loader={loader}
                    displayResponseModal={displayResponseModal}
                    setDisplayResponseModal={setDisplayResponseModal}
                    message={message}
                    responseType={responseType}
                    deleteUser={deleteUser}
                />
            </div>
        </>
    );
}

export default Home;