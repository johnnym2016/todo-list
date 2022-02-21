
//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)

//functions
function addTodo(event) {
    event.preventDefault()
    //create the todo div, li
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")

    //grab the todoDiv and append the child
    todoDiv.appendChild(newTodo)

    //completed button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-button")
    todoDiv.appendChild(completedButton)

    //trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-button")
    todoDiv.appendChild(trashButton)

    //append to list
    todoList.appendChild(todoDiv)
    //clear todo input val
    todoInput.value = ""
}

function deleteCheck(event) {
    const item = event.target 
    //delete todo
    if (item.classList[0] === 'trash-button') {
        const todo = item.parentElement
        //animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }

    //checked
    if (item.classList[0] === "complete-button") {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}
