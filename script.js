// Run this code after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Step 1: Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 2: Define the addTask function
  function addTask() {
    // Retrieve and trim the task input
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item and set its text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add functionality to remove the task when clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the button to the list item, and the item to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Step 3: Add event listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Step 4: Add event listener to taskInput for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Step 5: Invoke addTask on DOMContentLoaded (optional per instructions)
  // Note: This would normally be used if there’s preloaded data or state
  // Here it just ensures setup; we won't call addTask directly
});
