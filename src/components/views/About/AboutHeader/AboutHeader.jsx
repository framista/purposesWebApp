import React from 'react';

import './AboutHeader.scss';

const AboutHeader = () => (
  <svg
    width="100%"
    height="100%"
    id="svg"
    viewBox="0 0 1440 200"
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150 aboutHeader"
  >
    <path
      d="M 0,400 C 0,400 0,266 0,266 C 77.54066985645932,260.10526315789474 155.08133971291863,254.21052631578945 245,250 C 334.91866028708137,245.78947368421055 437.21531100478467,243.26315789473682 554,259 C 670.7846889952153,274.7368421052632 802.0574162679427,308.73684210526324 891,299 C 979.9425837320573,289.26315789473676 1026.5550239234449,235.7894736842105 1111,223 C 1195.4449760765551,210.2105263157895 1317.7224880382776,238.10526315789474 1440,266 C 1440,266 1440,400 1440,400 Z"
      stroke="none"
      stroke-width="0"
      fill="#ff0080ff"
      className="transition-all duration-300 ease-in-out delay-150 path-1"
      transform="rotate(-180 720 200)"
    ></path>
  </svg>
);

export default React.memo(AboutHeader);
