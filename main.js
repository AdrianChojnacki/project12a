const input = document.querySelector(`input`);
const ul = document.querySelector(`ul`);
const liAll = document.querySelectorAll(`li`);

const search = (e) => {
  const searchText = e.target.value.toLowerCase();

  ul.textContent = "";

  let tasks = [...liAll];
  tasks = tasks.filter((task) => task.textContent.toLowerCase().includes(searchText));
  tasks.forEach((task) => ul.appendChild(task));
};

input.addEventListener(`input`, search);
