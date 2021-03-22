/* Fonction du bouton pour ajouter une nouvelle tâche : 
ajoute la nouvelle tache à ul todo list et clear le input*/

const addTask = function () {
	let newTask = document.getElementById("input-task").value;
	// return false and message if input is blank
	if (newTask === "") {
		alert("BEEP BOOP...your next target?");
		return false;
	}

	let ul = document.getElementById("todo-list");
	let li = document.createElement("li");
	let text = document.createElement("p");

	//create complete button
	let completeBox = document.createElement("input");
	completeBox.setAttribute("type", "checkbox");
	completeBox.className = "checkbox";
	li.appendChild(completeBox);

	// create new task
	li.appendChild(text);
	text.appendChild(document.createTextNode(newTask));
	ul.appendChild(li);

	// event listeners so that the task move from todo to complete when button is clicked
	completeBox.onclick = function () {
		if (completeBox.checked) {
			const origin = document.getElementById("todo-list");
			const target = document.getElementById("done-list");
			const element = completeBox.parentNode;
			if (element) {
				target.append(element);
			}
		} else {
			const origin = document.getElementById("done-list");
			const target = document.getElementById("todo-list");
			const element = completeBox.parentNode;
			if (element) {
				target.append(element);
			}
		}
	};

	// Event listener for delete button
	let deleteButton = document.createElement("button");
	deleteButton.onclick = function () {
		deleteButton.parentElement.remove();
		return;
	};
	li.appendChild(deleteButton);
	deleteButton.className = "delete-button";
	// Clear input
	document.getElementById("input-task").value = "";
};

// Event listeners for click and enter in main input
const mainBtn = document.getElementById("newTask");
mainBtn.addEventListener("click", addTask);
const input = document.getElementById("input-task");
input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		mainBtn.click();
	}
});
