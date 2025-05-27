document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("taskInput");
    const addButton = document.getElementById("addTask");
    const taskContainer = document.getElementById("taskContainer");

    addButton.addEventListener("click", () => {
        const taskText = inputField.value.trim();
        if (taskText === "") return;

        const fragment = document.createDocumentFragment();
        const taskItem = document.createElement("li");

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        const completeButton = document.createElement("button");
        completeButton.textContent = "✔";
        completeButton.onclick = () => taskItem.classList.toggle("completed");

        const removeButton = document.createElement("button");
        removeButton.textContent = "❌";
        removeButton.onclick = () => taskContainer.removeChild(taskItem);

        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(removeButton);
        fragment.appendChild(taskItem);
        taskContainer.appendChild(fragment);

        inputField.value = "";
    });
});