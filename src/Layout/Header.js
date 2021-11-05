import React from 'react';

export default function Header(props) {
  return (
    <header className="jumbotron bg-dark text-white">
      <div className="container">
        <h1 className="display-4">{props.siteTitle}</h1>
        <p className="lead">{props.siteDescription}</p>
      </div>
    </header>
  );
};