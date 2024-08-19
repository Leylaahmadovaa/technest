let People=document.querySelector(".People")
let main=document.querySelector("main")
let Supervisors=document.querySelector("#Supervisors")
let eliteTasker=document.querySelector("#eliteTasker")
let New=document.querySelector("#new")
let Pros=document.querySelector("#Pros")
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
    let date=new Date();
    let currentMonth=date.getMonth()+1;
    let arr1=[]
    let arr2=[]
    let arr3=[]
    let arr4=[]
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
            let registerdatemonth=Number(element.startDate.charAt(5)+element.startDate.charAt(6));
            let difference
            difference=currentMonth-registerdatemonth
            if(difference<=3){
                return element;
            }
        });    
        arr4=people.filter((element)=>{
            if(element.supervisor==false){
            return element;
            }
        });

function Height(){
    if(eliteTasker.checked==true){
        main.style.height="2157px"
        }
        else if(New.checked==true){
        main.style.height="2157px"
        }
        else if(Supervisors.checked==true){
        main.style.height="1257px"
        }
        else if(Pros.checked==true){
        main.style.height="3655px"
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
                    <div class="namesupervisor">
                    <p>${arrays[i].user.name} ${arrays[i].user.surname}</p>
                    <div class="supervisor"></div>
                    </div>
                    <div class="ratingandnumber">
                    <div class="rating"></div>
                    <div class="ratingnumber">${arrays[i].averageRating}</div>
                    <div class="number">(24)</div>
                    </div>
                </div>
                </div>
                <div class="info">
                    <div class="completedTasks"><img src="assets/Group 26286.png" alt=""> ${arrays[i].completedTasks} Tasks</div>
                <div class="eliteTasker"></div>
                    <div class="New"></div>
                </div>
                <div class="bio">Hi! I am ${arrays[i].user.name}. ${arrays[i].bio}</div>
                <div class="details">
                <div class="View">view profile</div>
                <div class="BuutonAndPrice">
                <div class="dollar">$35</div>
                <div class="bookNow">Book Now</div>
                </div>
                </div>   
        `
        let registerdatemonth=Number(arrays[i].startDate.charAt(5)+arrays[i].startDate.charAt(6));
        let difference
        difference=currentMonth-registerdatemonth
        People.appendChild(Person)
        let rating=Person.querySelector(".rating")
        rating.appendChild(Rating)
        if(arrays[i].eliteTasker==true){
            let eliteTasker=Person.querySelector(".eliteTasker")
            eliteTasker.innerHTML='<img src="assets/Hashtag.svg" alt=""> Top Pro'
        }
        if(arrays[i].supervisor==true){
            let supervisor=Person.querySelector(".supervisor")
            supervisor.textContent=`(supervisor)`
        }
        if(difference<=3){
            let New=Person.querySelector(".New")
            New.innerHTML=`<img src="assets/Shape.png" alt=""> New Pro`
        }   
    }
}
function boolonetwo(aaa,bbb,ccc,eee,ddd){
if(eliteTasker.checked==true){         
Arrays(aaa)  
}
else if(New.checked==true){
Arrays(bbb)
}
else if(Supervisors.checked==true){
Arrays(ccc)
}
else if(Pros.checked==true){
Arrays(eee)
}
else{
Arrays(ddd)
}
}
Arrays(people)

New.addEventListener("click",()=>{
    if(New.checked==true){
        eliteTasker.checked=false
        Pros.checked=false
        Supervisors.checked=false
        Arrays(arr3)
        Height()
    }
    else{
        Arrays(people)
        Height()
    }  
})
Pros.addEventListener("click",()=>{
    if(Pros.checked==true){
        eliteTasker.checked=false
        Supervisors.checked=false
        New.checked=false
        Arrays(arr4)
        Height()
    } 
    else{
        Arrays(people)
        Height()
    }     
})
eliteTasker.addEventListener("click",()=>{
    if(eliteTasker.checked==true){
        Supervisors.checked=false
        Pros.checked=false
        New.checked=false
        Arrays(arr2)
        Height()
    } 
    else{
        Arrays(people)
        Height()
    }     
})
Supervisors.addEventListener("click",()=>{
    if(Supervisors.checked==true){
        eliteTasker.checked=false
        Pros.checked=false
        New.checked=false
        Arrays(arr1)
        Height()
    }
    else{
        Arrays(people)
        Height()
    }  
})

ByRating.addEventListener("click",()=>{
    if(ByRating.value=="Ascending"){ 
        bool3=true
        bool4=false
        descending_rating="ascending"
        descending_count=""
        boolonetwo(arr2.sort((a,b)=>a.averageRating-b.averageRating),arr3.sort((a,b)=>a.averageRating-b.averageRating),arr1.sort((a,b)=>a.averageRating-b.averageRating),arr4.sort((a,b)=>a.averageRating-b.averageRating),people.sort((a,b)=>a.averageRating-b.averageRating))
    }
    else{
        bool3=false
        bool4=false
        descending_rating="descending"
        descending_count=""
        boolonetwo(arr2.sort((a,b)=>b.averageRating-a.averageRating),arr3.sort((a,b)=>b.averageRating-a.averageRating),arr1.sort((a,b)=>b.averageRating-a.averageRating),arr4.sort((a,b)=>b.averageRating-a.averageRating),people.sort((a,b)=>b.averageRating-a.averageRating))

    }
})
ByTasksCount.addEventListener("click",()=>{
    if(ByTasksCount.value=="Asc"){
        bool4=true
        bool3=false
        descending_count="ascending"
        descending_rating=""
        boolonetwo(arr2.sort((a,b)=>a.completedTasks-b.completedTasks),arr3.sort((a,b)=>a.completedTasks-b.completedTasks),arr1.sort((a,b)=>a.completedTasks-b.completedTasks),arr4.sort((a,b)=>a.completedTasks-b.completedTasks),people.sort((a,b)=>a.completedTasks-b.completedTasks))
    }
    else{
        bool4=false
        bool3=false
        descending_count="descending"
        descending_rating=""
        boolonetwo(arr2.sort((a,b)=>b.completedTasks-a.completedTasks),arr3.sort((a,b)=>b.completedTasks-a.completedTasks),arr1.sort((a,b)=>b.completedTasks-a.completedTasks),arr4.sort((a,b)=>b.completedTasks-a.completedTasks),people.sort((a,b)=>b.completedTasks-a.completedTasks))

    }
})
}
getInfo()