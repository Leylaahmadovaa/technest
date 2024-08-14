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
    let arrSortRatingAscendig=[]
    let arrSortRatingDescendig=[]
    let arrSortTaskCountAscendig=[]
    let arrSortTaskCountDescendig=[]
    let arr1SortRatingAscendig=[]
    let arr1SortRatingDescendig=[]
    let arr1SortTaskCountAscendig=[]
    let arr1SortTaskCountDescendig=[]
    let arr2SortRatingAscendig=[]
    let arr2SortRatingDescendig=[]
    let arr2SortTaskCountAscendig=[]
    let arr2SortTaskCountDescendig=[]
    let arr3SortRatingAscendig=[]
    let arr3SortRatingDescendig=[]
    let arr3SortTaskCountAscendig=[]
    let arr3SortTaskCountDescendig=[]
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
for(let j = 0; j < people.length; j++){
    arrSortRatingAscendig.push(people[j])
    arrSortRatingDescendig.push(people[j])
    arrSortTaskCountAscendig.push(people[j])
    arrSortTaskCountDescendig.push(people[j])
}
for(let j = 0; j < arr1.length; j++){
    arr1SortRatingAscendig.push(arr1[j])
    arr1SortRatingDescendig.push(arr1[j])
    arr1SortTaskCountAscendig.push(arr1[j])
    arr1SortTaskCountDescendig.push(arr1[j])
}
for(let j = 0; j < arr2.length; j++){
    arr2SortRatingAscendig.push(arr2[j])
    arr2SortRatingDescendig.push(arr2[j])
    arr2SortTaskCountAscendig.push(arr2[j])
    arr2SortTaskCountDescendig.push(arr2[j])
}
for(let j = 0; j < arr3.length; j++){
    arr3SortRatingAscendig.push(arr3[j])
    arr3SortRatingDescendig.push(arr3[j])
    arr3SortTaskCountAscendig.push(arr3[j])
    arr3SortTaskCountDescendig.push(arr3[j])
}
arrSortRatingAscendig.sort((a,b)=>a.averageRating-b.averageRating)
arrSortRatingDescendig.sort((a,b)=>b.averageRating-a.averageRating)
arrSortTaskCountAscendig.sort((a,b)=>a.completedTasks-b.completedTasks)
arrSortTaskCountDescendig.sort((a,b)=>b.completedTasks-a.completedTasks)
arr1SortRatingAscendig.sort((a,b)=>a.averageRating-b.averageRating)
arr1SortRatingDescendig.sort((a,b)=>b.averageRating-a.averageRating)
arr1SortTaskCountAscendig.sort((a,b)=>a.completedTasks-b.completedTasks)
arr1SortTaskCountDescendig.sort((a,b)=>b.completedTasks-a.completedTasks)
arr2SortRatingAscendig.sort((a,b)=>a.averageRating-b.averageRating)
arr2SortRatingDescendig.sort((a,b)=>b.averageRating-a.averageRating)
arr2SortTaskCountAscendig.sort((a,b)=>a.completedTasks-b.completedTasks)
arr2SortTaskCountDescendig.sort((a,b)=>b.completedTasks-a.completedTasks)
arr3SortRatingAscendig.sort((a,b)=>a.averageRating-b.averageRating)
arr3SortRatingDescendig.sort((a,b)=>b.averageRating-a.averageRating)
arr3SortTaskCountAscendig.sort((a,b)=>a.completedTasks-b.completedTasks)
arr3SortTaskCountDescendig.sort((a,b)=>b.completedTasks-a.completedTasks)
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
            boolonetwo(arr1SortRatingAscendig,arr2SortRatingAscendig,arr3SortRatingAscendig,arrSortRatingAscendig)
        }
        else if((bool3!=true)&&(bool4==true)){
            if(Supervisors.checked==true){
                bool1=true
            }
            else{
                bool1=false
            }
            boolonetwo(arr1SortTaskCountAscendig,arr2SortTaskCountAscendig,arr3SortTaskCountAscendig,arrSortTaskCountAscendig)
        }
        else if(descending_rating=="descending"){
            if(Supervisors.checked==true){
                bool1=true
            }
            else{
                bool1=false
            }
            boolonetwo(arr1SortRatingDescendig,arr2SortRatingDescendig,arr3SortRatingDescendig,arrSortRatingDescendig)
        }
        else if(descending_count=="descending"){
            if(Supervisors.checked==true){
            bool1=true
        }
        else{
            bool1=false
        }
        boolonetwo(arr1SortTaskCountDescendig,arr2SortTaskCountDescendig,arr3SortTaskCountDescendig,arrSortTaskCountDescendig)
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
        boolonetwo(arr1SortRatingAscendig,arr2SortRatingAscendig,arr3SortRatingAscendig,arrSortRatingAscendig)
    }
    else if((bool3!=true)&&(bool4==true)){
        if(eliteTasker.checked==true){
            bool2=true
        }
        else{
            bool2=false
        }  
        boolonetwo(arr1SortTaskCountAscendig,arr2SortTaskCountAscendig,arr3SortTaskCountAscendig,arrSortTaskCountAscendig)   
    }
    else if(descending_rating=="descending"){
        if(Supervisors.checked==true){
            bool1=true
        }
        else{
            bool1=false
        }
        boolonetwo(arr1SortRatingDescendig,arr2SortRatingDescendig,arr3SortRatingDescendig,arrSortRatingDescendig)
    }
    else if(descending_count=="descending"){
        if(eliteTasker.checked==true){
            bool2=true
        }
        else{
            bool2=false
        }
        boolonetwo(arr1SortTaskCountDescendig,arr2SortTaskCountDescendig,arr3SortTaskCountDescendig,arrSortTaskCountDescendig,)
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
          boolonetwo(arr1SortRatingAscendig,arr2SortRatingAscendig,arr3SortRatingAscendig,arrSortRatingAscendig)   
    }
    else{
        bool3=false
        bool4=false
        descending_rating="descending"
        descending_count=""
        boolonetwo(arr1SortRatingDescendig,arr2SortRatingDescendig,arr3SortRatingDescendig,arrSortRatingDescendig) 
    }
})
ByTasksCount.addEventListener("click",()=>{
    if(ByTasksCount.value=="Asc"){
        bool4=true
        bool3=false
        descending_count="ascending"
        descending_rating=""
        boolonetwo(arr1SortTaskCountAscendig,arr2SortTaskCountAscendig,arr3SortTaskCountAscendig,arrSortTaskCountAscendig) 
    }
    else{
        bool4=false
        bool3=false
        descending_count="descending"
        descending_rating=""
        boolonetwo(arr1SortTaskCountDescendig,arr2SortTaskCountDescendig,arr3SortTaskCountDescendig,arrSortTaskCountDescendig) 
    }
})
}
getInfo()