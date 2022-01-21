import React from 'react';

import './AboutEntry.scss';

const AboutEntry = () => {
  return (
    <div>
      <h1 className="aboutEntry__title">Purposes App</h1>
      <div className="aboutEntry__section">
        <div className="aboutEntry__text">
          <p>Would you like to be more motivated to do task?</p>
          <p>Would you like to learn something new?</p>
          <p className="aboutEntry__text--highlighted">
            Purposes app is created for you
          </p>
          <p>Manage with all your goals and achieve success 🥇</p>
        </div>
        <div className="aboutEntry__imgContainer">
          <img
            className="aboutEntry__img"
            src={'images/to-do.svg'}
            alt="to-do"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEntry;
