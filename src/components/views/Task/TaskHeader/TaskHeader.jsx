import React from 'react';
import PropTypes from 'prop-types';
import { MdAddBox } from 'react-icons/md';

import { TASK_MODAL } from '../../../../constants/modalTypes';
import { SearchInput } from '../../../common/Filters';

import './TaskHeader.scss';

const TaskHeader = ({ showModal, changeSearchValueForTask, searchValue }) => {
  return (
    <div className="taskHeader">
      <div className="taskHeader__left">
        <h4 className="taskHeader__title">Tasks</h4>
        <SearchInput onChange={changeSearchValueForTask} value={searchValue} />
      </div>
      <button
        className="taskHeader__button"
        onClick={() => showModal(TASK_MODAL)}
      >
        <>
          <MdAddBox />
          <span>New Task</span>
        </>
      </button>
    </div>
  );
};

TaskHeader.propTypes = {
  searchValue: PropTypes.string,
  showModal: PropTypes.func,
  changeSearchValueForTask: PropTypes.func,
};

export default React.memo(TaskHeader);
