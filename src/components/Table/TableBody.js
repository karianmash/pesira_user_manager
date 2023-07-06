import React, { useState, useEffect } from 'react';

import ResponseMessage from '../Modals/ResponseMessage/ResponseMessage';
import Loader from '../Modals/Loader/Loader';
import TableRow from './TableRow';

function TableBody({ showUpdateUserModal, getAllUsers, loader, displayResponseModal, setDisplayResponseModal, message, responseType, deleteUser }) {
    const users = getAllUsers();

    const closeResponseModal = () => {
        setDisplayResponseModal('none');
    };

    return (
        <>
            <tbody>
                {users.map((user) => (
                    <TableRow
                        key={user.id}
                        number={user.id}
                        fullName={user.name}
                        username={user.username}
                        email={user.email}
                        phone={user.phone}
                        company={user.company.name}
                        address={`${user.address.street}, ${user.address.city}`}
                        showUpdateUserModal={showUpdateUserModal}
                        deleteUser={deleteUser}
                    />
                ))}
            </tbody>

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

export default TableBody;
