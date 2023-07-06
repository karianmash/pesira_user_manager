import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import UpdateUser from '../../components/Modals/UpdateUser/UpdateUser';

function Home() {
    const [displayUpdateModal, setdisplayUpdateModal] = useState('none');

    const showUpdateUserModal = (number) => () => {
        // alert(`Update user ${number}`);
        setdisplayUpdateModal('block');
    };

    const closeModal = () => {
        setdisplayUpdateModal('none');
    };

    return (
        <>
            <UpdateUser displayUpdateModal={displayUpdateModal} closeModal={closeModal} />
            <Header />
            <div className="container">
                <Table showUpdateUserModal={showUpdateUserModal} />
            </div>
        </>
    );
}

export default Home;