import React, { useMemo } from 'react';

import { OptionsMenu } from '../../../../common/Layout';
import { getOptions } from './DashboardTableRowOptionsMenu.helpers';

import './DashboardTableRowOptionsMenu.scss';

const DashboardTableRowOptionsMenu = ({ showModal, _id }) => {
  const options = useMemo(() => getOptions(showModal, _id), [_id]);
  return (
    <div className="dashboardTableRowOptionsMenu">
      <OptionsMenu options={options} />
    </div>
  );
};

export default DashboardTableRowOptionsMenu;
