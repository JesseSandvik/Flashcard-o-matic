import React from 'react';
import { useHistory } from 'react-router-dom';

export default function DeleteButton(props) {
    const history = useHistory();

    const deleteDeckButtonHandler = (event) => {
        event.preventDefault();
        
        if (window.confirm(`Are you sure you want to delete this ${props.buttonFunction.toLowerCase()}? This cannot be undone.`)) {
            props.delete(props.id)
                .then(() => {
                    if (props.currentPage === "ViewDeck") {
                        history.push("/");
                    } else {
                        history.go(0);
                    }
                });
        };
    };

    return (
        <span className="p-1">
            <button className="btn btn-danger" onClick={deleteDeckButtonHandler}>Delete {props.buttonFunction}</button>
        </span>
    );
};