import React from 'react';
import classNames from 'classnames';

import AboutFooter from './AboutFooter/AboutFooter';
import AboutHeader from './AboutHeader/AboutHeader';
import AboutEntry from './AboutEntry/AboutEntry';
import AboutLogin from './AboutLogin/AboutLogin';
import AboutSection from './AboutSection/AboutSection';

import { sections } from './About.helpers';

import './About.scss';

const About = ({ logged }) => {
  const contentClassName = classNames('about', {
    app__content: logged,
    'about--notLogged': !logged,
  });

  return (
    <div>
      <AboutHeader />
      <div className={contentClassName}>
        <AboutEntry />
        {!logged && <AboutLogin />}
        {sections.map((section) => (
          <AboutSection section={section} key={section.id} />
        ))}
      </div>
      <AboutFooter />
    </div>
  );
};

export default About;
