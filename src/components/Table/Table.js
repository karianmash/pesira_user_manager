import React from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';
import './Table.css';

function Table({ showUpdateUserModal, getAllUsers, loader, displayResponseModal, setDisplayResponseModal, message, responseType, deleteUser }) {
    return (
        <table className="table">
            <TableHead />
            <TableBody
                showUpdateUserModal={showUpdateUserModal}
                getAllUsers={getAllUsers}
                loader={loader}
                displayResponseModal={displayResponseModal}
                setDisplayResponseModal={setDisplayResponseModal}
                message={message}
                responseType={responseType}
                deleteUser={deleteUser}
            />
        </table>
    );
}

export default Table;