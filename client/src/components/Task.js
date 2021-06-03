import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Task = ({ getTasks, tasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

  console.log('tasks[0]', tasks[0]);

  let title = 'title';
  let date = 'date';
  let description = 'description';
  let tags = 'tags';

  if (tasks[0]) {
    title = tasks[0].title;
    date = tasks[0].date;
    description = tasks[0].description;
    tags = tasks[0].tags;
  } else {
    title = 'title';
    date = 'date';
    description = 'description';
    tags = 'tags';
  }

  console.log(title);

  return (
    <div className='task'>
      <h3>title: {title}</h3>
      <ul>
        <li>
          <strong>Recording date: {date}</strong>
        </li>
        <li>
          <strong>Description date: {description}</strong>
        </li>
      </ul>
      <div className='tags'>{tags}</div>
    </div>
  );
};

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Task;
