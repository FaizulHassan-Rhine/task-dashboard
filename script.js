// dynamic date 
const date = new Date();
const day = date.toLocaleString('default', { weekday: 'short' }); 
const month = date.toLocaleString('default', { month: 'short' });
const year = date.getFullYear(); 
const dayElement = document.getElementById('day');
const dateElement = document.getElementById('date');
if (dayElement) {
    dayElement.textContent = day + ' ,';
}
if (dateElement) {
    dateElement.textContent = `${month} ${date.getDate()} ${year}`;
}

// background color change randomly
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}


document.addEventListener("DOMContentLoaded", function () {
    // (1) Initialize task counts
    let taskAssignedCount = 6; // Initial number of tasks
    let completedCount = 0; // Initial completed tasks count

    // (2) Get references to necessary elements
    const taskAssignedElement = document.getElementById("task-assign"); // Task assigned count element
    const completedElement = document.getElementById("completed-tasks"); // Completed count element in navbar
    const activityLog = document.getElementById("active-log"); // Activity log container
    const taskButtons = document.querySelectorAll(".card-actions button"); // All "Complete" buttons
    const clearHistoryButton = document.getElementById("clear-log"); // Clear history button

    // (3) Loop through all task buttons
    taskButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (button.disabled) return; // Prevent multiple clicks

            // (4) Disable clicked button and change color to gray
            button.disabled = true; 
            button.style.backgroundColor = "gray"; 
            button.style.cursor = "not-allowed";

            // (5) Show alert when a task is completed
            alert("Board updated successfully");

            // (6) Update task counters
            taskAssignedCount--; 
            completedCount++;

            // (7) Update UI with new counts
            taskAssignedElement.innerText = taskAssignedCount; 
            completedElement.innerText = completedCount; 

            // (8) Get task title and current time for logging
            const taskTitle = button.closest(".card").querySelector(".card-title").innerText;
            const currentTime = new Date().toLocaleTimeString();

            // (9) Create log entry dynamically
            const logEntry = document.createElement("h1");
            logEntry.classList.add("w-[318px]", "h-[68px]", "text-left", "px-2", "flex", "justify-center", "items-center", "bg-[#F4F7FF]");
            logEntry.innerText = `You have completed ${taskTitle} at ${currentTime}`;

            // (10) Append log entry to activity log
            activityLog.appendChild(logEntry);

            // (11) Show final alerts when all tasks are completed
            if (completedCount === 6) {
                setTimeout(() => {
                    alert("Congrats!!!! You have completed all the current tasks!");
                    
                }, 500);
            }
        });
    });

    // (12) Clear activity log when clicking "Clear History"
    clearHistoryButton.addEventListener("click", function () {
        activityLog.innerHTML = "";
    });
});

