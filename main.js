const inputBox = document.getElementById("input");
const listContaner = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please Enter Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContaner.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContaner.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classlList.toggle("checked");
      saveData()
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContaner.innerHTML);
}
