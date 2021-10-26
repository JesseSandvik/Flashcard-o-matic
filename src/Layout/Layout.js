import React from 'react';
import Header from './Header';
import Routes from './Routes';

export default function Layout(props) {
    return (
        <div className="container-fluid p-4">
            <Header
                siteTitle={props.siteTitle}
                siteDescription={props.siteDescription}
            />
            <Routes />
        </div>
    );
};