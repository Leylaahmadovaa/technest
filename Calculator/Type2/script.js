const clear = document.querySelector("#C");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percent");
const multiply = document.querySelector("#X");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const abs = document.querySelector("#abs");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const dot = document.querySelector("#dot");
const zero = document.querySelector("#zero");
const arrow = document.querySelector("#arrow");
const equal = document.querySelector("#equal");

const pastCalculation = document.querySelector(".past-calculation");
const result=document.querySelector(".result")

clear.addEventListener("click",()=>{
    result.innerHTML="";
    pastCalculation.innerHTML="";

});
divide.addEventListener("click",()=>{
    let last=result.innerHTML.slice(result.innerHTML.length-1);
    if(
        (Number(last)==0||Number(last))&&
        !result.innerHTML.includes("/")&&
        !result.innerHTML.includes("*")&&
        !result.innerHTML.includes("+")&&
        !result.innerHTML.includes("-")
    ){
        result.append(" / ");
    }
});
percent.addEventListener("click",()=>{
    let number =Number(result.innerHTML);
    if(number){
        result.innerHTML=number/100;
    }
});
multiply.addEventListener("click",()=>{
    let last=result.innerHTML.slice(result.innerHTML.length - 1);
    if(
    (Number(last)==0||Number(last))&&
    !result.innerHTML.includes("/")&&
    !result.innerHTML.includes("*")&&
    !result.innerHTML.includes("+")&&
    !result.innerHTML.includes("-")
    ) {
        result.append(" * ");
    }
});
minus.addEventListener("click", () => {
    let last = result.innerHTML.slice(result.innerHTML.length - 1);
    if (
    (Number(last) == 0 || Number(last))&&
    !result.innerHTML.includes ("/") &&
    !result.innerHTML.includes ("*") &&
    !result.innerHTML.includes ("+") &&
    !result.innerHTML.includes ("-")
    ) {
    result.append(" - ");
    }
    });
plus.addEventListener("click", () => {
    let last= result.innerHTML.slice(result.innerHTML.length-1);
    console.log(last);
    if (
    (Number(last) == 0 || Number(last)) &&
    !result.innerHTML.includes ("/") &&
    !result.innerHTML.includes ("*") &&
    !result.innerHTML.includes ("+") &&
    !result.innerHTML.includes ("-")
){
    result.append(" + ");
}
});
dot.addEventListener("click",()=>{
    let last=result.innerHTML.slice(result.innerHTML.length-1);
    let rawResult=result.innerHTML;
    let array=rawResult.split(" ");
    if(array.length>2){
        if(!Number(array[2].includes("."))){
            result.append(".");
        }
    }else{
        if(
            (Number(last)==0||Number(last))&&
            !result.innerHTML.includes(".")
        ){
            result.append(".");
        }
    }
});
abs.addEventListener("click",()=>{
    let number=Number(result.innerHTML);
    if(number){
        result.innerHTML=-1*number;
    }
});
arrow.addEventListener("click",()=>{
    result.innerHTML=result.innerHTML.slice(0,result.innerHTML.length-1);
});
zero.addEventListener("click",()=>{
    result.append(0);
});
one.addEventListener("click",()=>{
    result.append(1);
});
two.addEventListener("click",()=>{
    result.append(2);
});
three.addEventListener("click",()=>{
    result.append(3);
});
four.addEventListener("click",()=>{
    result.append(4);
});
five.addEventListener("click",()=>{
    result.append(5);
});
six.addEventListener("click",()=>{
    result.append(6);
});
seven.addEventListener("click",()=>{
    result.append(7);
});
eight.addEventListener("click",()=>{
    result.append(8);
});
nine.addEventListener("click",()=>{
    result.append(9);
});

equal.addEventListener("click",()=>{
    let rawResult=result.innerHTML;
    let array=rawResult.split(" ");
    if(array.length==3){
        let res;
        let firstNumber=Number(array[0]);
        let secondNumber=Number(array[2]);
        switch(array[1]){
            case "*":
                res=firstNumber*secondNumber;
                break;
            case "/":
                res=firstNumber/secondNumber;
                break;
            case "+":
                res=firstNumber+secondNumber;
                break;
            case "-":
                res=firstNumber-secondNumber;
                break;
            default:
                break;
        }
        console.log(res);
        pastCalculation.innerHTML=result.innerHTML;
        result.innerHTML=res;
    }else{
        pastCalculation.innerHTML=result.innerHTML;
    }
});
