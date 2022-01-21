import React from 'react';

import './AboutSection.scss';

const AboutSection = ({ section }) => {
  const { title, subTitle, imgSrc, id } = section;
  return (
    <div className="aboutSection">
      {title && (
        <h2 className="about__sectionTitle aboutSection__title">{title}</h2>
      )}
      {subTitle && <h4 className="aboutSection__subtitleTitle">{subTitle}</h4>}
      <img src={imgSrc} alt={id} />
    </div>
  );
};

export default AboutSection;
