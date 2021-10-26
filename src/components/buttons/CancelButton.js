import React from 'react';

export default function CancelButton(props) {
    return (
        <div className="p-1">
            <button className="btn btn-secondary"onClick={props.cancelHandler}>Cancel</button>
        </div>
    );
};