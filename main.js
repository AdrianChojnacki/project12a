// Main array
const toDoList = [];

// Selectors
const inputSearch = document.querySelector(`.search`);
const form = document.querySelector(`form`);
const inputAdd = document.querySelector(`.add`);
const taskNumber = document.querySelector(`h1 span`);
const ul = document.querySelector(`ul`);

// Render list function
const renderList = () => {
  inputSearch.value = "";
  inputAdd.value = "";
  ul.textContent = "";

  taskNumber.textContent = toDoList.length;

  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
};

// Search task function
const searchTask = (e) => {
  ul.textContent = "";

  const taskTitle = e.target.value;

  if (taskTitle === "") {
    renderList();
    return;
  }

  const searchValue = e.target.value.toLowerCase();

  const filteredItems = toDoList.filter((item) =>
    item.querySelector("span").textContent.toLowerCase().includes(searchValue)
  );

  filteredItems.forEach((item) => {
    ul.appendChild(item);
  });
};

// Search task listener
inputSearch.addEventListener(`input`, searchTask);

// Remove task function
const removeTask = (e) => {
  e.target.parentNode.remove();

  const deletedItemIndex = e.target.parentNode.dataset.key;

  toDoList.splice(deletedItemIndex, 1);

  renderList();
};

// Add task function
const addTask = (e) => {
  e.preventDefault();

  const taskTitle = inputAdd.value;

  if (taskTitle === "") return;

  const task = document.createElement(`li`);
  task.innerHTML = `<span>${taskTitle}</span> <button>Usuń</button>`;

  task.querySelector(`button`).addEventListener(`click`, removeTask);

  toDoList.push(task);

  renderList();
};

// Add task listener
form.addEventListener(`submit`, addTask);
