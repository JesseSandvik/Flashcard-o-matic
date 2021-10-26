import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container">
      <h1>Not found!</h1>
      <p>This page does not exist.</p>
      <p>Please return to the <Link to="/">Home page</Link>.</p>
    </div>
  );
};
