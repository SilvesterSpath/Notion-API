import React from 'react';

const Task = ({ getTasks, task }) => {
  const tasks = getTasks();
  console.log(tasks);
  return (
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
  );
};

export default Task;
