import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <>
      <div className='task'>
        <h3>title: {task.title}</h3>
        <ul>
          <li>
            <strong>Recording date: {task.date}</strong>
          </li>
          <li>
            <strong>Description date: {task.description}</strong>
          </li>
        </ul>
        <div className='tags'>{task.tags}</div>
      </div>
    </>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
