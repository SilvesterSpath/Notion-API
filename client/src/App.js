import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTasks = async () => {
    setLoading(true);

    const res = await axios.get('/tasks');

    console.log(res.data);
    setLoading(false);
    const data = await res.data;
    return data;
  };

  /*   const addTasksTo = async () => {
    const tasks = await getTasks();
    console.log(tasks);
  }; */

  return (
    <div>
      <header>
        <h2>SilvesterSpath</h2>
        <h3>Upcoming Tasks</h3>
      </header>
      <main>
        <Tasks getTasks={getTasks} />
      </main>
    </div>
  );
};

export default App;
