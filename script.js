const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const formMessage = document.getElementById("formMessage");

function displayTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskList.innerHTML = "";

    if (savedTasks.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.classList.add("empty-message");
        emptyMessage.innerText = "Belum ada tugas. Tambahkan tugas pertamamu!";
        taskList.appendChild(emptyMessage);
    }

    savedTasks.forEach(function(task) {
        createTask(task.name, task.completed);
    });
}

function saveTasks() {
    const tasks = [];
    const taskItems = taskList.querySelectorAll(".task-item");

    taskItems.forEach(function(item) {
        const taskCheckbox = item.querySelector("input");
        const taskText = item.querySelector(".task-text");

        tasks.push({
            name: taskText.innerText,
            completed: taskCheckbox.checked
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(taskName, isCompleted = false) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.setAttribute(
        "aria-label",
        "Tandai tugas selesai"
    );
    taskCheckbox.checked = isCompleted;

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.innerText = taskName;

    if (isCompleted) {
        taskItem.classList.add("completed");
    }

    taskCheckbox.addEventListener("change", function() {
        if (taskCheckbox.checked) {
            taskItem.classList.add("completed");
        } else {
            taskItem.classList.remove("completed");
        }

        saveTasks();
    });

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);
    taskList.appendChild(taskItem);
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        formMessage.innerText = "Nama tugas harus diisi.";
        taskInput.focus();
    } else {
        formMessage.innerText = "";

        const emptyMessage = taskList.querySelector(".empty-message");

        if (emptyMessage) {
            emptyMessage.remove();
        }

        createTask(taskName);
        saveTasks();

        taskInput.value = "";
        taskInput.focus();
    }
});

displayTasks();
