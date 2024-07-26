let addbutton=document.querySelector(".addbutton")
let TodoList=document.querySelector(".TodoList")
let title=document.querySelector(".title")
let priority=document.getElementById('priority')
let changedItem
function TodoTasksAdd(Title,Priority){
    let Todo=document.createElement("div")
    Todo.classList.add("Todo")
    Todo.innerHTML=`
                <div class="info">
                    <h2 class="TodoTitle">${Title}</h2>
                    <p class="TaskPriority">${Priority}</p>
                </div>
                <div class="Buttons">
                <div class="EditButton">
                    <button type="button" title="edit" class="Edit">Edit</button>
                </div>
                <div class="DeleteButton">
                    <button type="button" title="delete" class="Delete">Delete</button>
                </div>
                </div>
    `
    let Delete=Todo.querySelector(".Delete")
    Delete.addEventListener("click",function(){
        Todo.remove()
        let PastTasks=JSON.parse(localStorage.getItem("TodoList"))
        if(PastTasks){
            PastTasks=PastTasks.filter((element)=>{
                if(element.title==TodoTitle.textContent){
                    return false
                }
                else{
                    return true
                }
            })
            localStorage.setItem("TodoList",JSON.stringify(PastTasks))

        }
    })
    
    let Edit=Todo.querySelector(".Edit")
    let TodoTitle=Todo.querySelector(".TodoTitle")
    let TaskPriority=Todo.querySelector(".TaskPriority")
    Edit.addEventListener("click",function(){
        let PastTasks=JSON.parse(localStorage.getItem("TodoList"))
        if(Edit.textContent=="Edit"){
            TodoTitle.contentEditable=true
            Edit.textContent="Save"
            changedItem=TodoTitle.textContent
        }
        else{
            TodoTitle.contentEditable=false
            Edit.textContent="Edit"
            if(PastTasks){
                PastTasks=PastTasks.map((element)=>{
                if(element.title==changedItem&&element.priority==TaskPriority.textContent){
                    return{
                        title:TodoTitle.textContent,
                        priority:TaskPriority.textContent
                    }}
                else{
                    return element
                }})
                    localStorage.setItem("TodoList",JSON.stringify(PastTasks))

        }
    }})
    return Todo
}

function onLoadPage(){
    let PastTasks=JSON.parse(localStorage.getItem("TodoList"))
    if(PastTasks){
        for(let i=0;i<PastTasks.length;i++){
            let Tasks=TodoTasksAdd(PastTasks[i].title,PastTasks[i].priority)
            TodoList.appendChild(Tasks)
        }
    }
}
onLoadPage()

function TodoTaskAdd(){
    let Tasks=TodoTasksAdd(title.value,priority.value)
    let PastTasks=JSON.parse(localStorage.getItem("TodoList"))
    if(PastTasks){
        PastTasks.push({
            title:title.value,
            priority:priority.value
        })
    }
    else{
        PastTasks=[{
            title:title.value,
            priority:priority.value
        }]
    }
    localStorage.setItem("TodoList",JSON.stringify(PastTasks))
    TodoList.appendChild(Tasks)
    title.value=""
}
addbutton.addEventListener("click",TodoTaskAdd)

