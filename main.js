// const strikeout = (e) => {
//   e.target.classList.toggle("strikeout");
// };

// document.querySelectorAll(`li`).forEach((li) => li.addEventListener(`click`, strikeout));

const removeTask = (e) => {
  //   e.target.parentNode.classList.add("strikeout");
  //   e.target.remove();
  const index = e.target.dataset.key;
  console.log(index);
  document.querySelector(`[data-key="${index}"]`).classList.add("strikeout");
  e.target.remove();
};

document.querySelectorAll(`button`).forEach((button) => button.addEventListener(`click`, removeTask));
