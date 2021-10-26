import React from 'react';
import { Link } from 'react-router-dom';

export default function EditButton(props) {
    return (
        <div className="p-1">
            <Link className="btn btn-info" to={props.routePath}>Edit {props.buttonFunction}</Link>
        </div>
    );
};