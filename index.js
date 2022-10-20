console.log("funguju!");

import { Task } from "./Task/index.js";

const renderTasks = (items) => {
  const taskList = document.querySelector(".todo__tasks");
  const tickField = document.querySelector("#checkbox-undone");

  taskList.innerHTML = items.map((item) => Task(item)).join("");

  tickField.addEventListener("change", () => {
    if (tickField.checked) {
      taskList.innerHTML = items
        .filter((item) => item.done === false)
        .map((item) => Task(item))
        .join("");
    } else {
      taskList.innerHTML = items.map((item) => Task(item)).join("");
    }
  });
};

fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
  .then((response) => response.json())
  .then((data) => renderTasks(data));
