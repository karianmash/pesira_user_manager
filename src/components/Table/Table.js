import React from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';
import './Table.css';

function Table({ showUpdateUserModal }) {
    return (
        <table className="table">
            <TableHead />
            <TableBody showUpdateUserModal={showUpdateUserModal} />
        </table>
    );
}

export default Table;