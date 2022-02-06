document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.new_task_description.value);
    buildToDo(e.target.new_task_description.value);
    form.reset();
  })
});

function buildToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  p.textContent = `${todo} `;
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}