import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateButton(props) {
    return (
        <span className="p-1">
            <Link to ={props.routePath}>
                <button className="btn btn-warning">Create A New {props.buttonFunction}</button>
            </Link>
        </span>
    );
};