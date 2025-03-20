function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    
    if (taskValue === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
        button.parentElement.remove();
    }
}