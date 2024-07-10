let input=document.querySelector("input");
let output=document.querySelector(".containerOutput");
function add(){
    let div=document.createElement("div");
    div.classList.add("output");
    div.innerHTML=`
           <input type="text" class="a" value="${input.value}" readonly >
           <div>
           <button class="edit" onclick="edit(this)" >Edit</button>
           <button class="save" onclick="save(this)" >Save</button>
            <button class="delete" onclick="sil(this)">
                <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
            `;
    output.appendChild(div);
    input.value=``;    
}

function sil(element){
    let div = element.parentElement;
    let iv=div.parentElement;
    iv.remove();
}
function save(element){
    let e = element.parentElement;
    let d=e.parentElement;
    let u=d.querySelector("input");

    u.setAttribute('value', `${u.value}`);
    u.setAttribute('readonly', true);
    console.log(u);

}
function edit(element){
    let e = element.parentElement;
    let d=e.parentElement;
    let u=d.querySelector("input");
    u.removeAttribute("readonly");   
}
