const tasksEl = document.getElementById('tasks');
const loadingEl = document.getElementById('loading');

let loading = false;

const getVideosFromBackEnd = async () => {
  loading = true;
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();
  loading = false;
  return data;
};

const addVideosToDOM = async () => {
  const tasks = await getVideosFromBackEnd();

  if (!loading) {
    loadingEl.innerHTML = '';
  }

  tasks.forEach((i) => {
    const div = document.createElement('div');
    div.className = 'task';
    div.innerHTML = `
    <h3>${i.title}</h3>
    <ul>
      <li><strong>Recording Date: ${i.date}</strong></li>
      <li><strong>Description: ${i.description}</strong></li>
    </ul>
    <div class="tags">${i.tags}</div>
    `;
    tasksEl.appendChild(div);
  });
};

addVideosToDOM();
