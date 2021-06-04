import React from 'react';
import Task from './Task';

const Tasks = ({ getTasks, tasks }) => {
  return (
    <div>
      <Task getTasks={getTasks} tasks={tasks} />
    </div>
  );
};

export default Tasks;
