export const Task = (props) => {
  const { name, due, done } = props;
  let result = "";
  if (done) {
    result = `
          <div class="task">
              <div class="task__body">
                <div class="task__name">${name}</div>
                <div class="task__due">${due}</div>
              </div>
              <div class="task__done">✓</div>
            </div>`;
  } else {
    result = `
          <div class="task">
              <div class="task__body">
                <div class="task__name">${name}</div>
                <div class="task__due">${due}</div>
              </div>
              <div class="task__done"></div>
            </div>`;
  }

  return result;
};
