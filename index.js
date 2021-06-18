const express = require('express');
const getTasks = require('./services/notion');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));

app.get('/tasks', async (req, res) => {
  const tasks = await getTasks();
  res.json(tasks);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, console.log(`Server started on ${PORT}`));

/* (async () => {
  const tasks = await getTasks();
  console.log(tasks);
})(); */
