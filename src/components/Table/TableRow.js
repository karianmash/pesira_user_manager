import React from 'react';

function TableRow({ number, fullName, username, email, phone, company, address, showUpdateUserModal }) {
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
                    <button className="btn btn-delete">Delete</button>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
