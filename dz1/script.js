const openModalBtn = document.querySelector('#openModal');
const openCardModal = document.querySelector('#openCardModal');
const closeModal = document.querySelectorAll('.close-button');
const modal = document.getElementById('modal');
const addTaskForm = document.querySelector('form[name="addTask"]');
const addCardForm = document.querySelector('form[name="addCard"]');
const taskInput = document.querySelector('.task-input');
const taskType = document.querySelector('#task_type');
const taskDifficulty = document.querySelector('#task_dificulty');
const taskDate = document.querySelector('.task-date');
const taskNotes = document.querySelector('.task-notes');
const addTaskBtn = document.querySelector('.submit-task');
const typenumb = document.querySelector('.')
const mainContent = document.querySelector('.main-content');

openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
    addTaskForm.classList.remove('hidden');
    addCardForm.classList.add('hidden');
};


openCardModal.onclick = () => {
    modal.classList.remove('hidden');
    addCardForm.classList.remove('hidden');
    addTaskForm.classList.add('hidden');
};

closeModal.forEach(button => {
    button.onclick = () => {
        modal.classList.add('hidden');
    };
});

addTaskBtn.onclick = (e) => {
    e.preventDefault(); 

    if (taskInput.value.trim() === '' || taskDate.value === '') return;

    const newCategory = document.createElement('div');
    newCategory.classList.add('todo-category');
    newCategory.innerHTML = `
        <h3 class="category-title">${taskType.value} <div class="task-count">${task}</div></h3>
        <div class="task-list">
            <div class="task">
                <div class="task_name">
                    <input type="checkbox">
                    <div class="smth">
                        <p>${taskInput.value}</p>
                        <div class="due-date">Due: ${taskDate.value}</div>
                    </div>
                </div>
                <div class="btns">
                    <button class="save"><img src="./assets/icons8-backspace-50.png" alt=""></button>
                    <button class="delete"><img src="./assets/icons8-delete-24.png" alt=""></button>
                </div>
            </div>
        </div>
    `;

    mainContent.appendChild(newCategory);

    taskInput.value = '';
    taskDate.value = '';
    taskNotes.value = '';

    modal.classList.add('hidden');
};

function addTaskEvents(category) {
    const editBtn = category.querySelector('.edit');
    const deleteBtn = category.querySelector('.delete');
    const taskText = category.querySelector('.task-text');
    const dueDate = category.querySelector('.due-date');

    // Редактирование задачи
    editBtn.onclick = () => {
        taskText.readOnly = !taskText.readOnly;
        dueDate.readOnly = !dueDate.readOnly;
        if (!taskText.readOnly) {
            taskText.focus();
        }
    };

    // Удаление всего блока
    deleteBtn.onclick = () => {
        category.remove();
    };
}