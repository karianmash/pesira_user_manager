import React from 'react';
import TableRow from './TableRow';

function TableBody({ showUpdateUserModal }) {
    return (
        <tbody>
            <TableRow
                number="1."
                fullName="Leanne Graham"
                username="Bret"
                email="leannegraham@pesira.io"
                phone="1-770-736-8031 x56442"
                company="Romaguera-Crona"
                address="Kulas Light"
                showUpdateUserModal={showUpdateUserModal}
            />
            <TableRow
                number="2."
                fullName="Ervin Howell"
                username="Antonette"
                email="ervin@yahoo.com"
                phone="010-692-6593 x09125"
                company="Crona LLC"
                address="Victor Plains"
                showUpdateUserModal={showUpdateUserModal}
            />
        </tbody>
    );
}

export default TableBody;
