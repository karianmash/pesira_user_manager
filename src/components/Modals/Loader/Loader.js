import React from 'react';

import './Loader.css';

function Loader({ displayLoader }) {
    return (
        <div className="modal" style={{ display: displayLoader }}>
            <div class="lds-roller">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    );
}

export default Loader;