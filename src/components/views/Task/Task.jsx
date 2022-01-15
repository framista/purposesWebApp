import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../common/Layout';
import TaskHeader from './TaskHeader/TaskHeader.redux';
import TaskModal from './TaskModal/TaskModal.redux';
import TaskTable from './TaskTable/TaskTable.redux';

const Task = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      setLoading(true);
      await props.getTaskRouteData();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <TaskModal />
      <div className="app__content">
        <TaskHeader />
        {loading ? <Loading /> : <TaskTable />}
      </div>
    </>
  );
};

Task.propTypes = {
  getTaskRouteData: PropTypes.func,
};

export default Task;
