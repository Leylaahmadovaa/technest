let one=document.querySelector("#one")
let two=document.querySelector("#two")
let three=document.querySelector("#three")
let four=document.querySelector("#four")
let five=document.querySelector("#five")
let six=document.querySelector("#six")
let seven=document.querySelector("#seven")
let eight=document.querySelector("#eight")
let nine=document.querySelector("#nine")
let zero=document.querySelector("#zero")
let ShowCalculation=document.querySelector(".ShowCalculation")
let dot=document.querySelector(".dot")
let plus=document.querySelector("#plus")
let minus=document.querySelector("#minus")
let multiply=document.querySelector("#multiply")
let divide=document.querySelector("#divide")
let percent=document.querySelector("#percent")
let left=document.querySelector("#left")
let numberone=document.querySelector(".numberone")
let numbertwo=document.querySelector(".numbertwo")
let calculationsign=document.querySelector(".calculationsign")
let equal=document.querySelector("#equal")
let Result=document.querySelector(".Result")
let sign=document.querySelector("#sign")
let clearkey=document.querySelector(".clearkey")
one.addEventListener("click",()=>{
    Result.append(1)
})
two.addEventListener("click",()=>{
    Result.append(2)
})
three.addEventListener("click",()=>{
    Result.append(3)
})
four.addEventListener("click",()=>{
    Result.append(4)
})
five.addEventListener("click",()=>{
    Result.append(5)
})
six.addEventListener("click",()=>{
    Result.append(6)
})
seven.addEventListener("click",()=>{
    Result.append(7)
})
eight.addEventListener("click",()=>{
    Result.append(8)
})
nine.addEventListener("click",()=>{
    Result.append(9)
})
zero.addEventListener("click",()=>{
    Result.append(0)
})
equal.addEventListener("click",()=>{
    if(ShowCalculation==""){
    ShowCalculation.append(Result.innerHTML)
    let num1=Result.innerHTML;
    let num2=Result.innerHTML;
    let res
    if(Result.innerHTML.includes("+")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('+')[0])
        secondnum=Number(num2.split('+')[1])
        res=firstnum+secondnum;
    }
    else if(Result.innerHTML.includes("-")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('-')[0])
        secondnum=Number(num2.split('-')[1])
        res=firstnum-secondnum;
    }
    else if(Result.innerHTML.includes("*")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('*')[0])
        secondnum=Number(num2.split('*')[1])
        res=firstnum*secondnum;
    }
    else if(Result.innerHTML.includes("/")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('/')[0])
        secondnum=Number(num2.split('/')[1])
        res=firstnum/secondnum;
    }
    else if(Result.innerHTML.includes("%")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('%')[0])
        secondnum=Number(num2.split('%')[1])
        res=(firstnum*secondnum)/100;
    }
    Result.innerHTML=res;}
else{
    ShowCalculation.innerHTML=``
    ShowCalculation.append(Result.innerHTML)
    let num1=Result.innerHTML;
    let num2=Result.innerHTML;
    let res
    if(Result.innerHTML.includes("+")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('+')[0])
        secondnum=Number(num2.split('+')[1])
        res=firstnum+secondnum;
    }
    else if(Result.innerHTML.includes("-")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('-')[0])
        secondnum=Number(num2.split('-')[1])
        res=firstnum-secondnum;
    }
    else if(Result.innerHTML.includes("*")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('*')[0])
        secondnum=Number(num2.split('*')[1])
        res=firstnum*secondnum;
    }
    else if(Result.innerHTML.includes("/")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('/')[0])
        secondnum=Number(num2.split('/')[1])
        res=firstnum/secondnum;
    }
    else if(Result.innerHTML.includes("%")){
        let firstnum,secondnum;
        firstnum=Number(num1.split('%')[0])
        secondnum=Number(num2.split('%')[1])
        res=(firstnum*secondnum)/100;
    }
    Result.innerHTML=res;

}
}
)
plus.addEventListener("click",()=>{
    let ShowCalc=Result.innerHTML;
    let numberOfSign=ShowCalc.split("+").length - 1;
    let stringBeforePlusSign=String(ShowCalc.split('+')[0]);    
    if((ShowCalc.charAt(0)=='')||(numberOfSign>0)||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="-")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="*")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="/")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="%")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)==".")||(ShowCalc.includes("-"))||(ShowCalc.includes("*"))||(ShowCalc.includes("/"))||(ShowCalc.includes("%")))
    {
        return;
    }
    else{
    Result.append("+")}
})
minus.addEventListener("click",()=>{
    let ShowCalc=Result.innerHTML;
    let numberOfSign=ShowCalc.split("-").length - 1;
    let stringBeforePlusSign=String(ShowCalc.split('-')[0]); 
    if((ShowCalc.charAt(0)=='')||(numberOfSign>0)||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="+")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="*")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="/")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="%")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)==".")||(ShowCalc.includes("+"))||(ShowCalc.includes("*"))||(ShowCalc.includes("/"))||(ShowCalc.includes("%")))
    {
        return;
    }
    else{
    Result.append("-")}
}
)
multiply.addEventListener("click",()=>{
    let ShowCalc=Result.innerHTML;
    let numberOfSign=ShowCalc.split("*").length - 1;
    let stringBeforePlusSign=String(ShowCalc.split('*')[0]); 
    if((ShowCalc.charAt(0)=='')||(numberOfSign>0)||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="-")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="+")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="/")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="%")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)==".")||(ShowCalc.includes("-"))||(ShowCalc.includes("+"))||(ShowCalc.includes("/"))||(ShowCalc.includes("%")))
    {
        return;
    }
    else{
    Result.append("*")}
})
divide.addEventListener("click",()=>{
    let ShowCalc=Result.innerHTML;
    let numberOfSign=ShowCalc.split("/").length - 1;
    let stringBeforePlusSign=String(ShowCalc.split('/')[0]); 
    if((ShowCalc.charAt(0)=='')||(numberOfSign>0)||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="-")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="*")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="+")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="%")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)==".")||(ShowCalc.includes("-"))||(ShowCalc.includes("*"))||(ShowCalc.includes("+"))||(ShowCalc.includes("%")))
    {
        return;
    }
    else{
    Result.append("/")}
})
percent.addEventListener("click",()=>{
    let ShowCalc=Result.innerHTML;
    let numberOfSign=ShowCalc.split("%").length - 1;
    let stringBeforePlusSign=String(ShowCalc.split('%')[0]); 
    if((ShowCalc.charAt(0)=='')||(numberOfSign>0)||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="-")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="*")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="/")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="+")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)==".")||(ShowCalc.includes("-"))||(ShowCalc.includes("*"))||(ShowCalc.includes("/"))||(ShowCalc.includes("+")))
    {
        return;
    }
    else{
    Result.append("%")}
})
sign.addEventListener("click",()=>{
    let num;
    num=Number(Result.innerHTML);
    Result.innerHTML=-1*num;
})
dot.addEventListener("click",()=>{
    let ShowCalc=Result.innerHTML;
    let numberOfSign=ShowCalc.split(".").length - 1;
    let stringBeforePlusSign=String(ShowCalc.split('.')[0]); 
    if((ShowCalc.charAt(0)=='')||(numberOfSign>0)||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="-")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="*")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="/")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="%")||(stringBeforePlusSign.charAt(stringBeforePlusSign.length-1)=="+"))
    {
        return;
    }
    else{
    Result.append(".")}
})
clearkey.addEventListener("click",()=>{
    Result.innerHTML=``
    ShowCalculation.innerHTML=``
})
left.addEventListener("click",()=>{
   let sil= String(Result.textContent);
   let s;
   s=sil.slice(0, -1);
   Result.textContent=s
})

