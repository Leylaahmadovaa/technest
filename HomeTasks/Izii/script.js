let services=document.querySelector(".services")
let servicesmobile=document.querySelector(".servicesmobile")
async function getInfo(){
    let data= await fetch(`data.json`).then(res=>res.json())
    console.log(data.data.services);
    for (let i = 0; i < data.data.services.length; i++) {
        let photos;
        photos=data.data.services[i].cover_img.publicUrl;
        console.log(photos);
        let title;
        title=data.data.services[i].title_en;

        let sub;
        sub=data.data.services[i].subServices;
        
        let service=document.createElement("div")
        service.classList.add("service")
        service.innerHTML=`
            <div class="photo" style="background-image:url('${photos}')">
        <div class="info">
          <h2>${title}</h2>
        </div>
      </div>
      <div class="details">
       
      </div>
        `
        let details=service.querySelector(".details")
        for (let j = 0; j < data.data.services[i].subServices.length; j++) {
            let p=document.createElement("p")
            p.textContent=`${data.data.services[i].subServices[j].title_en}`
            details.appendChild(p)

            if(data.data.services[i].subServices.length>7){
             details.style.overflowY="scroll"
            }
        }
        services.appendChild(service)
        }     
  }
  getInfo()


async function getInfomobile(){
    let data= await fetch(`data.json`).then(res=>res.json())
    
    for (let i = 0; i < data.data.services.length; i++) {
        let photos;
        photos=data.data.services[i].cover_img.publicUrl;
      
        let title;
        title=data.data.services[i].title_en;

        let sub;
        sub=data.data.services[i].subServices;
        
        let servicemobile=document.createElement("div")
        servicemobile.classList.add("servicemobile")
        servicemobile.innerHTML=`
    <div class="photomobile" style="background-image:url('${photos}')">
      <div class="info2">
        <h2>${title}</h2>
      </div>
    </div>
    <div class="detailsmobile" style="display:none">
     
    </div>
        `
        let detailsmobile=servicemobile.querySelector(".detailsmobile")
        for (let j = 0; j < data.data.services[i].subServices.length; j++) {
            let p=document.createElement("p")
            p.textContent=`${data.data.services[i].subServices[j].title_en}`
            detailsmobile.appendChild(p)

            if(data.data.services[i].subServices.length>7){
              detailsmobile.style.overflowY="scroll"
            }
        }

        let photomobile=servicemobile.querySelector(".photomobile")
        photomobile.addEventListener("click",()=>{
          console.log(detailsmobile.style.display);
          if(detailsmobile.style.display=="none"){
          detailsmobile.style.display=""
          }
          else{
          detailsmobile.style.display="none"
          }
        })
        servicesmobile.appendChild(servicemobile)
        }     
  }
  getInfomobile()


