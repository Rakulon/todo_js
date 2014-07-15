// todallist.onclick(event) if event.target =   ?    remove event
var toDo = document.getElementById('toDo');
var toDoListJ = document.getElementById('toDoList');
var theButton = document.getElementById("toDoButton");

theButton.onclick = function() {
  	var newTitleHeading = document.createElement('h1');
  	var newTextNode = document.createTextNode(toDo.value);
  	var newRmButton = document.createElement('button');
  	toDoListJ.appendChild(newTitleHeading);
  	newTitleHeading.appendChild(newTextNode);
  	newTitleHeading.appendChild(newRmButton);
  	newRmButton.innerHTML = "X";
    newRmButton.onclick = function() {
		newTitleHeading.remove();
    };
  	toDo.value = "";
};

