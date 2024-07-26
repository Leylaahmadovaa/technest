let addButton=document.querySelector(".addButton")
let Todotitle=document.querySelector("input.title")
let TodoPriority=document.querySelector("#priority")
let Todos=document.querySelector(".Todos")
let changedItem
function createTodo(title,priority){
        let todo=document.createElement("div")
    todo.classList.add("Todo")
    todo.innerHTML=`
    <div class="info">
                    <p class="todoTitle">${title}</p>
                    <span class="todoPriority">${priority}</span>
                </div>
                <div class="buttons">
                    <button type="button" class="edit">Edit</button>
                    <button type="button" class="delete">Delete</button>
                </div>
    ` 
    let deleteButton=todo.querySelector(".delete")
    let taskTitle=todo.querySelector(".todoTitle")
    let taskPriority=todo.querySelector(".todoPriority")
    taskTitle.contentEditable=false
    deleteButton.addEventListener("click",function(){
        todo.remove()
        let PastTasks=JSON.parse(localStorage.getItem("Todos"))
        if(PastTasks){
            PastTasks=PastTasks.filter((element)=>{
                if(element.title==taskTitle.textContent){
                    return false
                }
                else{
                    return true
                }
            })
            localStorage.setItem("Todos",JSON.stringify(PastTasks))

        }
    })
    let editButton=todo.querySelector(".edit")

    editButton.addEventListener("click",function(){
        let PastTasks=JSON.parse(localStorage.getItem("Todos"))
        if(editButton.textContent=="Edit"){
            taskTitle.contentEditable=true
            editButton.textContent="Save"
            changedItem=taskTitle.textContent
        }
        else{
            editButton.textContent="Edit"
            taskTitle.contentEditable=false
                        if(PastTasks){
                PastTasks=PastTasks.map((element)=>{
                if(element.title==changedItem&&element.priority==taskPriority.textContent){
                    return{
                        title:taskTitle.textContent,
                        priority:taskPriority.textContent
                    }}
                else{
                    return element
                }})
                    localStorage.setItem("Todos",JSON.stringify(PastTasks))
            
        }
    } 
    })
    return todo
}
function onLoadPage(){
        let PastTasks=JSON.parse(localStorage.getItem("Todos"))
    if(PastTasks){
        for(let i=0;i<PastTasks.length;i++){
            let newTodo=createTodo(PastTasks[i].title,PastTasks[i].priority)
            Todos.appendChild(newTodo)
        }
    }
}
onLoadPage()
function addTodo(){
    let newTodo=createTodo(Todotitle.value,TodoPriority.value)
   let PastTasks=JSON.parse(localStorage.getItem("Todos"))
        if(PastTasks){
                PastTasks.push({
            title:Todotitle.value,
            priority:TodoPriority.value
        })
    }
    else{
                PastTasks=[{
            title:Todotitle.value,
            priority:TodoPriority.value
        }]
    }
    localStorage.setItem("Todos",JSON.stringify(PastTasks))
    Todos.appendChild(newTodo)
    Todotitle.value=""
}
addButton.addEventListener("click",addTodo)
