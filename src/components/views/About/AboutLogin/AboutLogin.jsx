import React from 'react';
import { Link } from 'react-router-dom';

import './AboutLogin.scss';

const AboutLogin = () => {
  return (
    <div className="aboutLogin">
      <h2 className="about__sectionTitle">
        First step - create account or login
      </h2>
      <div className="aboutLogin__options">
        <Link to={'/login'}>Sing In </Link>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
    </div>
  );
};

export default AboutLogin;
