import React from 'react';

export default function Header(props) {
  return (
    <header className="jumbotron bg-dark">
      <div className="container text-white">
        <h1 className="display-4">{props.siteTitle}</h1>
        <p className="lead">{props.siteDescription}</p>
      </div>
    </header>
  );
};