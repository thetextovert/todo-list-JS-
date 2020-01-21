var addBtn = document.getElementById("btn");

function addTask() {
  var input = document.getElementById("todo").value;
  let listElement = document.createElement("li");
  //delete button corresponding to each task
  var delBtn = document.createElement("span");
  delBtn.className = "btn btn-success";
  delBtn.innerHTML = "<i class=material-icons>done</i>";
  //delete button corresponding to each task
  var remBtn = document.createElement("span");
  remBtn.className = "btn btn-danger";
  remBtn.innerHTML = "<i class=material-icons>delete</i>";
  listElement.innerHTML = input;

  
  document.getElementById("list").appendChild(listElement);
  //appending delete btn to each list element $ provide functionality to delete button
  listElement.appendChild(delBtn).onclick = function() {
    listElement.style.textDecoration = "line-through";
    alert("Hurray!Task completed");
  };
  listElement.appendChild(remBtn).onclick = function() {
    alert("dropping the task");
        listElement.style.display = "none";
  };
}
