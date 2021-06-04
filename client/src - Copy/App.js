import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTasks = async () => {
    setLoading(true);

    let res = await axios.get('/tasks');

    console.log('res.data:', res.data);
    setTasks(res.data);
    setLoading(false);
  };

  return (
    <div>
      <header>
        <h2>SilvesterSpath</h2>
        <h3>Upcoming Tasks</h3>
      </header>
      <main>
        <Tasks getTasks={getTasks} tasks={tasks} />
      </main>
    </div>
  );
};

export default App;
