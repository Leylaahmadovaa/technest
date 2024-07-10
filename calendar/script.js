let leftarr=document.querySelector(".leftarr");
let rightarr=document.querySelector(".rightarr");
let main=document.querySelector("main");
let month=document.querySelector(".month");
let date=new Date();//Bu günün tarixinə uyğun seçir.
function getMonthName(number){
    switch (number) {
        case 0:
            return "Yanvar";
        case 1:
            return "Fevral";
        case 2:
            return "Mart";
        case 3:
            return "Aprel";
        case 4:
            return "May";
        case 5:
            return "Iyun";
        case 6:
            return "Iyul";
        case 7:
            return "Avqust";
        case 8:
            return "Sentyabr";
        case 9:
            return "Oktyabr";
        case 10:
            return "Noyabr";
        case 11:
            return "Dekabr";
        default:
            break;
    }
}
fillCalendar();//Bu kalendarımızı indiki tarixə uyğun olaraq siftədən doldurur.
function nextMonth(){
    date.setMonth(date.getMonth()+1);
    month.innerHTML=`${getMonthName(date.getMonth())} ${date.getFullYear()}`;
    fillCalendar();
}
function prevMonth(){
    date.setMonth(date.getMonth()-1);
    month.innerHTML=`${getMonthName(date.getMonth())} ${date.getFullYear()}`;
    fillCalendar();
}
function fillCalendar(){
    main.innerHTML=``;
    date.setMonth(date.getMonth()+1);//növbəti aya get
    console.log(date);
    date.setDate(0);//qayıt indiki ayın axrına
    let lengthOfMonth=date.getDate();//indiki ayın axrı neəsindəndirsə o ədədi bura mənimsət
    console.log(date);
    date.setDate(1);//indiki ayın 1-i həftənin neçənci gününə düşür onu ayarlamağa başla
    console.log(date.getDay());
    let weekday=date.getDay();//indiki ayın 1-i həftənin neçənci gününə düşürsə onu mənimsət.
    if(weekday==0){//amerikan təqvimini dəyişirik azərbaycan təqvimi edirik
        weekday=7;
    }
    for(let i=1;i<weekday;i++){//indiki ayın 1-i həftənin neçənci gününə düşürsə ona kimi boşluq qoyur
        let day=document.createElement("div");
        day.classList.add("day");
        main.appendChild(day);
    }
    for(let i=1;i<=lengthOfMonth;i++){//indiki ayın 1-i həftənin neçənci gününə düşürsə ona kimi qoyduğu boşluq bitəndən başlayaraq günləri doldurur
        let day=document.createElement("div");
        day.classList.add("day");
        day.innerHTML=i;
        main.appendChild(day);
    }
}
leftarr.onclick=prevMonth;
rightarr.onclick=nextMonth;
