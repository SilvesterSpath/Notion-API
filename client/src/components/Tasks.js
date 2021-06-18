import React, { useEffect, Fragment } from 'react';
import Task from './Task';
import Spinner from './Spinner';

const Tasks = ({ getTasks, tasks, loading }) => {
  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {tasks.map((i) => {
            return <Task key={i.id} task={i} />;
          })}
        </>
      )}
    </Fragment>
  );
};

export default Tasks;
