let People=document.querySelector(".People")
let main=document.querySelector("main")
let Supervisors=document.querySelector("#Supervisors")
let eliteTasker=document.querySelector("#eliteTasker")
let bool1=false;
let bool2=false;
let bool3=false;
let bool4=false;
let descending_rating;
let descending_count;
let ByRating=document.querySelector("#ByRating")
let ByTasksCount=document.querySelector("#ByTasksCount")
async function getInfo(){
    let data= await fetch(`allProsData.json`).then(res=>res.json())
    let people=data.data.taskers;
    let arr1=[]
    let arr2=[]
    let arr3=[]
    arr1=people.filter((element)=>{
        if(element.supervisor==true){
        return element;
        }
        });
    arr2=people.filter((element)=>{
        if(element.eliteTasker==true){
            return element;
            }
        });
    arr3=people.filter((element)=>{
        if((element.eliteTasker==true)&&(element.supervisor==true)){
            return element;
            }
        });
function Height(){
    if((bool1==true)&&(bool2!=true)){
        main.style.height="1257px"
    }
    else if((bool1!=true)&&(bool2==true)){
        main.style.height="2157px"
    }
    else if(bool1==true&&bool2==true){
        main.style.height="1257px"
    }
    else{
        main.style.height="4909px"
    }
}
Height()
function Arrays(arrays){
    People.innerHTML=``
    for (let i = 0; i < arrays.length; i++){
        let Rating=document.createElement("div")
        Rating.classList.add("Rating")
        for (let j = 0;  j< arrays[i].averageRating; j++) {
            let stars=document.createElement("img")
            stars.setAttribute("src","assets/Vector.png")
            Rating.appendChild(stars)
        } 
        let Person=document.createElement("div")
        Person.classList.add("Person")
        Person.innerHTML=`
                <div class="user">
                    <img src="${arrays[i].user.profile_picture.publicUrl}" alt="">
                    <div class="nameAndRating">
                    <p>${arrays[i].user.name} ${surname=arrays[i].user.surname}</p>
                    <div class="rating">
                    </div>
                </div>
                </div>
                <div class="info">
                    <div class="completedTasks"><span>Completed Tasks: </span> ${arrays[i].completedTasks}</div>
                </div>
                <div class="bio"><span>Bio: </span>${arrays[i].bio}</div>
                <div class="details">
                <div class="supervisor"></div>
                <div class="eliteTasker"></div>
                </div>   
        `
        People.appendChild(Person)
        let rating=Person.querySelector(".rating")
        rating.appendChild(Rating)
        if(arrays[i].supervisor==true){
            let supervisor=Person.querySelector(".supervisor")
            supervisor.textContent='Supervisor'
        }
        if(arrays[i].eliteTasker==true){
            let eliteTasker=Person.querySelector(".eliteTasker")
            eliteTasker.textContent='eliteTasker'
        }   
    }
}
function boolonetwo(aaa,bbb,ccc,ddd){
if((bool1==true)&&(bool2!=true)){         
Arrays(aaa)  
}
else if((bool1!=true)&&(bool2==true)){
Arrays(bbb)
}
else if(bool1==true&&bool2==true){
Arrays(ccc)
}
else{
Arrays(ddd)
}
}
Arrays(people)
Supervisors.addEventListener("click",()=>{   
        if(((bool3==true)&&(bool4!=true))||((bool3==true)&&(bool4==true))){  
            if(Supervisors.checked==true){
                bool1=true
            }
            else{
                bool1=false
            }
            boolonetwo(arr1.sort((a,b)=>a.averageRating-b.averageRating),arr2.sort((a,b)=>a.averageRating-b.averageRating),arr3.sort((a,b)=>a.averageRating-b.averageRating),people.sort((a,b)=>a.averageRating-b.averageRating))
        }
        else if((bool3!=true)&&(bool4==true)){
            if(Supervisors.checked==true){
                bool1=true
            }
            else{
                bool1=false
            }
            boolonetwo(arr1.sort((a,b)=>a.completedTasks-b.completedTasks),arr2.sort((a,b)=>a.completedTasks-b.completedTasks),arr3.sort((a,b)=>a.completedTasks-b.completedTasks),people.sort((a,b)=>a.completedTasks-b.completedTasks))
        }
        else if(descending_rating=="descending"){
            if(Supervisors.checked==true){
                bool1=true
            }
            else{
                bool1=false
            }
            boolonetwo(arr1.sort((a,b)=>b.averageRating-a.averageRating),arr2.sort((a,b)=>b.averageRating-a.averageRating),arr3.sort((a,b)=>b.averageRating-a.averageRating),people.sort((a,b)=>b.averageRating-a.averageRating))
        }
        else if(descending_count=="descending"){
            if(Supervisors.checked==true){
            bool1=true
        }
        else{
            bool1=false
        }
            boolonetwo(arr1.sort((a,b)=>b.completedTasks-a.completedTasks),arr2.sort((a,b)=>b.completedTasks-a.completedTasks),arr3.sort((a,b)=>b.completedTasks-a.completedTasks),people.sort((a,b)=>b.completedTasks-a.completedTasks))
        }     
        else{
            if(Supervisors.checked==true){
                bool1=true
            }
            else{
                bool1=false
            }
            boolonetwo(arr1,arr2,arr3,people)
        }
        Height()
})
eliteTasker.addEventListener("click",()=>{
    if(((bool3==true)&&(bool4!=true))||((bool3==true)&&(bool4==true))){
        if(eliteTasker.checked==true){
            bool2=true
        }
        else{
            bool2=false
        }
        boolonetwo(arr1.sort((a,b)=>a.averageRating-b.averageRating),arr2.sort((a,b)=>a.averageRating-b.averageRating),arr3.sort((a,b)=>a.averageRating-b.averageRating),people.sort((a,b)=>a.averageRating-b.averageRating))
    }
    else if((bool3!=true)&&(bool4==true)){
        if(eliteTasker.checked==true){
            bool2=true
        }
        else{
            bool2=false
        }  
        boolonetwo(arr1.sort((a,b)=>a.completedTasks-b.completedTasks),arr2.sort((a,b)=>a.completedTasks-b.completedTasks),arr3.sort((a,b)=>a.completedTasks-b.completedTasks),people.sort((a,b)=>a.completedTasks-b.completedTasks))
    }
    else if(descending_rating=="descending"){
        if(Supervisors.checked==true){
            bool1=true
        }
        else{
            bool1=false
        }
        boolonetwo(arr1.sort((a,b)=>b.averageRating-a.averageRating),arr2.sort((a,b)=>b.averageRating-a.averageRating),arr3.sort((a,b)=>b.averageRating-a.averageRating),people.sort((a,b)=>b.averageRating-a.averageRating))
    }
    else if(descending_count=="descending"){
        if(eliteTasker.checked==true){
            bool2=true
        }
        else{
            bool2=false
        }
        boolonetwo(arr1.sort((a,b)=>b.completedTasks-a.completedTasks),arr2.sort((a,b)=>b.completedTasks-a.completedTasks),arr3.sort((a,b)=>b.completedTasks-a.completedTasks),people.sort((a,b)=>b.completedTasks-a.completedTasks))
    }
    else{
        if(eliteTasker.checked==true){
            bool2=true
        }
        else{
            bool2=false
        }
        boolonetwo(arr1,arr2,arr3,people)                       
    }
    Height()
})
ByRating.addEventListener("click",()=>{
    if(ByRating.value=="Ascending"){ 
        bool3=true
        bool4=false
        descending_rating="ascending"
        descending_count=""
        boolonetwo(arr1.sort((a,b)=>a.averageRating-b.averageRating),arr2.sort((a,b)=>a.averageRating-b.averageRating),arr3.sort((a,b)=>a.averageRating-b.averageRating),people.sort((a,b)=>a.averageRating-b.averageRating))
    }
    else{
        bool3=false
        bool4=false
        descending_rating="descending"
        descending_count=""
        boolonetwo(arr1.sort((a,b)=>b.averageRating-a.averageRating),arr2.sort((a,b)=>b.averageRating-a.averageRating),arr3.sort((a,b)=>b.averageRating-a.averageRating),people.sort((a,b)=>b.averageRating-a.averageRating))
    }
})
ByTasksCount.addEventListener("click",()=>{
    if(ByTasksCount.value=="Asc"){
        bool4=true
        bool3=false
        descending_count="ascending"
        descending_rating=""
        boolonetwo(arr1.sort((a,b)=>a.completedTasks-b.completedTasks),arr2.sort((a,b)=>a.completedTasks-b.completedTasks),arr3.sort((a,b)=>a.completedTasks-b.completedTasks),people.sort((a,b)=>a.completedTasks-b.completedTasks))
    }
    else{
        bool4=false
        bool3=false
        descending_count="descending"
        descending_rating=""
        boolonetwo(arr1.sort((a,b)=>b.completedTasks-a.completedTasks),arr2.sort((a,b)=>b.completedTasks-a.completedTasks),arr3.sort((a,b)=>b.completedTasks-a.completedTasks),people.sort((a,b)=>b.completedTasks-a.completedTasks))
    }
})
}
getInfo()