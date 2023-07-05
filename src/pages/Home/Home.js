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

    return (
        <>
            <UpdateUser displayUpdateModal={displayUpdateModal} />
            <Header />
            <div className="container">
                <Table showUpdateUserModal={showUpdateUserModal} />
            </div>
        </>
    );
}

export default Home;