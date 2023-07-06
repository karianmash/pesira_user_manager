import React from 'react';

function TableRow({ number, fullName, username, email, phone, company, address, showUpdateUserModal, deleteUser }) {
    const handleDeleteUser = (number) => () => {
        deleteUser(number);
    };

    return (
        <tr>
            <td>{number}</td>
            <td>{fullName}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{company}</td>
            <td>{address}</td>
            <td>
                <div className="btn-group">
                    <button className="btn btn-edit" onClick={showUpdateUserModal(number)}>Edit</button>
                    <button className="btn btn-delete" onClick={handleDeleteUser(number)}>Delete</button>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
