(() => {
  const $inputEl = document.querySelector('input');
  const $submitButtonEl = document.querySelector('#submit');
  const $todoListEl = document.querySelector('ul');

  const TASKS = ['Demo task 1', 'Demo task 2', 'Demo task 3'];

  function addTask(label) {
    const $newTaskElement = document.createElement('li');

    const $span = document.createElement('span');
    $newTaskElement.appendChild($span);
    $newTaskElement.textContent = label;

    const $btn = document.createElement('button');
    $btn.textContent = 'Delete';
    $newTaskElement.appendChild($btn);

    $todoListEl.append($newTaskElement);
  }

  function deleteTask($itemEl) {
    $itemEl.parentNode.removeChild($itemEl);
  }

  function init() {
    TASKS.forEach(task => {
      addTask(task)
    })
  }

  $submitButtonEl.addEventListener('click', () => {
    addTask($inputEl.value);
    $inputEl.value = '';
  });

  $todoListEl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      deleteTask(event.target.parentNode);
    }
  });

  init();
})();