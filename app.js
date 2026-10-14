let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let task = document.getElementById("taskList");
let addTask = document.getElementById("addTask");

addBtn.addEventListener("click" , function () {
   let addTodo =  input.value.trim()

   if (addTodo === "") {
    console.log("phala todo likho");
    return;
   }

  let item = document.createElement("div")
  item.className =  "itemContainer"

  let p = document.createElement("p");
  p.innerText = addTodo;

  let edit = document.createElement("button")
  edit.innerText = "Edit"

  let Delete = document.createElement("button")
  Delete.innerText = "Delete"

  Delete.addEventListener("click" , function () {
    item.remove()
  })

  edit.addEventListener("click" , function () {
    if (edit.innerText === "Edit") {
        let update = prompt("naya todo likho")
        p.innerText = update.trim()
       }
  })

  item.appendChild(p)
  item.appendChild(edit)
  item.appendChild(Delete)

  addTask.appendChild(item)

  input.value = ""
})
