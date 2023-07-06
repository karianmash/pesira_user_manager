import React from 'react';

import './ResponseMessage.css';

function ResponseMessage({ displayResponseModal, closeResponseModal, message, responseType }) {
    return (
        <div className="modal" style={{ display: displayResponseModal }}>
            <div className="add-user">
                <div className="modal-header">
                    <h3>{responseType}</h3>
                    <span onClick={closeResponseModal}>X</span>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default ResponseMessage;