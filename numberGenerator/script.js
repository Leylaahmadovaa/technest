let numberInput=document.getElementById("numberInput");//id-ynən edək çünki onsuz da id vermişik
function showNumber(){//bunu mütləq funksiya ilə yazmalıyıq
console.log(numberInput.value);//input-un içindəki qiyməti bizə qaytarır
let container=document.querySelector(".container");
container.innerHTML=` `;
for (let i = 1; i <= numberInput.value; i++) {
    let div=document.createElement("div");
    div.classList.add("number");
    div.textContent=i;
    container.appendChild(div);
}
}
