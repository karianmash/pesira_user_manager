import React from 'react';

import Header from '../../components/Header/Header';
import AddUser from '../../components/AddUserForm/AddUserForm';

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <AddUser />
            </div>
        </>
    );
}

export default Home;