import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ActivityModal from './ActivityModal/ActivityModal.redux';
import DashboardCharts from './DashboardCharts/DashboardCharts.redux';
import DashboardHeader from './DashboardHeader/DashboardHeader.redux';
import { Loading } from '../../common/Layout';

const Dashboard = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      setLoading(true);
      await props.getDashboardRouteData();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <ActivityModal />
      <div className="app__content">
        <DashboardHeader />
        {loading ? <Loading /> : <DashboardCharts />}
      </div>
    </>
  );
};

Dashboard.propTypes = {
  getDashboardRouteData: PropTypes.func,
};

export default Dashboard;
