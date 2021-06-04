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
    title = tasks[1].title;
    date = tasks[1].date;
    description = tasks[1].description;
    tags = tasks[1].tags;
  } else {
    title = 'title';
    date = 'date';
    description = 'description';
    tags = 'tags';
  }

  return (
    <div className='task'>
      {tasks.map((i) => {
        return <h1>{i.title}</h1>;
      })}
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
