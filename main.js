const toDoList = [];

const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const taskNumber = document.querySelector(`h1 span`);
const ul = document.querySelector(`ul`);

const renderList = () => {
  ul.textContent = "";

  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });

  taskNumber.textContent = document.querySelectorAll(`li.task`).length;
};

const removeTask = (e) => {
  e.target.parentNode.remove();

  const index = e.target.parentNode.dataset.key;

  toDoList.splice(index, 1);

  renderList();
};

const addTask = (e) => {
  e.preventDefault();

  const taskTitle = input.value;

  if (taskTitle === "") return;

  const task = document.createElement(`li`);
  task.innerHTML = `${taskTitle} <button>Usuń</button>`;
  task.className = "task";
  task.querySelector(`button`).addEventListener(`click`, removeTask);

  toDoList.push(task);

  //   ul.appendChild(task);

  renderList();

  input.value = "";
};

form.addEventListener(`submit`, addTask);
