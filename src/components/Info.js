import React from 'react';
import './info.css';

function Info() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="info">
      <div className="container">
        <h2 className="heading">User Information</h2>
        <div className="info-card">
          <p className="label-value">
            <span className="label">Name:</span> {user.name}
          </p>
          <p className="label-value">
            <span className="label">Username:</span> {user.username}
          </p>
          <p className="label-value">
            <span className="label">Email:</span> {user.email}
          </p>
          <p className="label-value">
            <span className="label">Phone:</span> {user.phone}
          </p>
          <p className="label-value">
            <span className="label">Website:</span> {user.website}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
