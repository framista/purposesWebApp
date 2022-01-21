import React from 'react';
import classNames from 'classnames';

import AboutFooter from './AboutFooter/AboutFooter';
import AboutHeader from './AboutHeader/AboutHeader';
import AboutEntry from './AboutEntry/AboutEntry';

import './About.scss';

const About = ({ logged }) => {
  const contentClassName = classNames('about', {
    app__content: logged,
  });

  return (
    <div>
      <AboutHeader />
      <div className={contentClassName}>
        <AboutEntry />
      </div>
      <AboutFooter />
    </div>
  );
};

export default About;
