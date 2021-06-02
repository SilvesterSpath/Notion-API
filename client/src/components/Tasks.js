import React, { useState } from 'react';
import Task from './Task';

const Tasks = ({ getTasks }) => {
  const task = {
    title: 'Thistitle',
    date: 'thisDAte',
    description: 'thisDescription',
  };
  return (
    <div>
      <Task getTasks={getTasks} task={task} />
    </div>
  );
};

export default Tasks;
