const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const taskNumber = document.querySelector(`h1 span`);
const ul = document.querySelector(`ul`);
const listItems = document.querySelectorAll(`li`);

const removeTask = (e) => {
  e.target.parentNode.remove();

  const liItems = document.querySelectorAll(`li.task`).length;
  taskNumber.textContent = liItems;
};

const addTask = (e) => {
  e.preventDefault();
  const taskTitle = input.value;

  if (taskTitle === "") return;

  const task = document.createElement(`li`);
  task.innerHTML = `${taskTitle} <button>Usuń</button>`;
  task.className = "task";
  task.querySelector(`button`).addEventListener(`click`, removeTask);
  ul.appendChild(task);

  input.value = "";

  const liItems = document.querySelectorAll(`li.task`).length;
  taskNumber.textContent = liItems;
};

form.addEventListener(`submit`, addTask);
