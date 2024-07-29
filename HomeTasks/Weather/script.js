let search = document.querySelector(".search")
let SearchBox=document.querySelector(".SearchBox")
let container=document.querySelector(".container")
let date=new Date();
let vaxt=String(date);
let heftegun=date.getDay();
let heftegunstring;
let heft=date.getDay();
let hef;
let axtar=document.querySelector(".axtar")
SearchBox.style.display="none";
axtar.addEventListener("click",()=>{
    axtar.style.display="none";
    SearchBox.style.display="flex";
    search.value=""

})

switch (heftegun) {
    case 0:
        heftegunstring="Sunday"
        hef="Sun"
        break;
    case 1:
        heftegunstring="Monday"
        hef="Mon"
        break;
    case 2:
        heftegunstring="Tuesday"
        hef="Tue"
        break;
    case 3:
        heftegunstring="Wednesday"     
        hef="Wed"     
        break;
    case 4:
        heftegunstring="Thursday"
        hef="Thu"
        break;
    case 5:
        heftegunstring="Friday"
        hef="Fri"
        break;
    case 6:
        heftegunstring="Saturday"
        hef="Sat"
        break;
    default:
        break;
}
search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(search.value);
        async function getWeatherInfo(city) {
            let location = await fetch(`https://us1.locationiq.com/v1/search.php?key=pk.6071c5c3a9cb08816a0322571ed3bb53&q=${city}&format=json`).then(res => res.json())
            console.log(location[0]);
            let cityy=location[0].display_name;
            let latitude = location[0].lat
            let longitude = location[0].lon
            let weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max&timezone=Europe%2FMoscow&forecast_days=14`).then(res => res.json())
            console.log(weather);

            let place=document.querySelector(".place")
            place.textContent=cityy;

            let Degree=document.querySelector(".Degree")
            let derece=weather.current.temperature_2m;
            Degree.textContent=String(Math.floor(derece,0))+"°C";
            
            let percent=document.querySelector(".percent")
            let humidity=weather.current.relative_humidity_2m;
            percent.textContent=String(humidity)+"%";
            
            let windd=document.querySelector(".windd")
            let wind=weather.current.wind_speed_10m;
            windd.textContent=String(wind)+"km/h";

        let derece1=document.querySelector(".derece1")
        let derece2=document.querySelector(".derece2")
        let derece3=document.querySelector(".derece3")
        let derece4=document.querySelector(".derece4")
        let derece5=document.querySelector(".derece5")
        let derece6=document.querySelector(".derece6")
        let derece7=document.querySelector(".derece7")
        
        derece1.textContent=String(Math.floor(weather.daily.temperature_2m_max[0],0))+"°C"
        derece2.textContent=String(Math.floor(weather.daily.temperature_2m_max[1],0))+"°C"
        derece3.textContent=String(Math.floor(weather.daily.temperature_2m_max[2],0))+"°C"
        derece4.textContent=String(Math.floor(weather.daily.temperature_2m_max[3],0))+"°C"
        derece5.textContent=String(Math.floor(weather.daily.temperature_2m_max[4],0))+"°C"
        derece6.textContent=String(Math.floor(weather.daily.temperature_2m_max[5],0))+"°C"
        derece7.textContent=String(Math.floor(weather.daily.temperature_2m_max[6],0))+"°C"
        }    
        SearchBox.style.display="none";
        let Result=document.createElement("div")
        Result.classList.add("Result")
        Result.innerHTML=`
    <div class="left">
        <div class="partone">
        <div class="weekdayname">${heftegunstring}</div>
        <div class="Date">${vaxt.split(' ')[0]} ${vaxt.split(' ')[1]} ${vaxt.split(' ')[2]} ${vaxt.split(' ')[3]}</div>
        <div class="place"></div>
        </div>
        <div class="parttwo">
        <div class="Degree"></div>
        </div>
    </div>
    <div class="outPut">
        <div class="one">
            <div class="sol">
                <p>HUMIDITY</p>
                <p>WIND</p>
            </div>
            <div class="sag">
                <p class="percent"></p>
                <p class="windd"></p>
            </div>
        </div>
        <div class="two">
            <div class="w1">
                <div class="ikon"><i class="fa-solid fa-wind"></i></div>
                <div class="hefteningunu1"></div>
                <div class="derece1"></div>
            </div>
            <div class="w1">
                <div class="ikon"><i class="fa-solid fa-wind"></i></div>
                <div class="hefteningunu2"></div>
                <div class="derece2"></div>
            </div>
            <div class="w1">
                <div class="ikon"><i class="fa-solid fa-wind"></i></div>
                <div class="hefteningunu3">Mon</div>
                <div class="derece3"></div>
            </div>
            <div class="w1">
                <div class="ikon"><i class="fa-solid fa-wind"></i></div>
                <div class="hefteningunu4">Mon</div>
                <div class="derece4"></div>
            </div>
            <div class="w1">
                <div class="ikon"><i class="fa-solid fa-wind"></i></div>
                <div class="hefteningunu5">Mon</div>
                <div class="derece5"></div>
            </div>
            <div class="w1">
                <div class="ikon"><i class="fa-solid fa-wind"></i></div>
                <div class="hefteningunu6">Mon</div>
                <div class="derece6"></div>
            </div>
            <div class="w1">
                <div class="ikon"><i class="fa-solid fa-wind"></i></div>
                <div class="hefteningunu7">Mon</div>
                <div class="derece7"></div>
            </div>
        </div>
        <div class="button">Change location</div>
    </div>
        `
        container.appendChild(Result)
        let hefteningunu1=document.querySelector(".hefteningunu1")
        let hefteningunu2=document.querySelector(".hefteningunu2")
        let hefteningunu3=document.querySelector(".hefteningunu3")
        let hefteningunu4=document.querySelector(".hefteningunu4")
        let hefteningunu5=document.querySelector(".hefteningunu5")
        let hefteningunu6=document.querySelector(".hefteningunu6")
        let hefteningunu7=document.querySelector(".hefteningunu7")
         if(heft==0){
            hefteningunu1.textContent="Sun"
            hefteningunu2.textContent="Mon"
            hefteningunu3.textContent="Tue"
            hefteningunu4.textContent="Wed"
            hefteningunu5.textContent="Thu"
            hefteningunu6.textContent="Fri"
            hefteningunu7.textContent="Sat"
         }
         if(heft==1){
            hefteningunu1.textContent="Mon"
            hefteningunu2.textContent="Tue"
            hefteningunu3.textContent="Wed"
            hefteningunu4.textContent="Thu"
            hefteningunu5.textContent="Fri"
            hefteningunu6.textContent="Sat"
            hefteningunu7.textContent="Sun"
         }
         if(heft==2){
             hefteningunu1.textContent="Tue"
             hefteningunu2.textContent="Wed"
             hefteningunu3.textContent="Thu"
             hefteningunu4.textContent="Fri"
             hefteningunu5.textContent="Sat"
             hefteningunu6.textContent="Sun"
             hefteningunu7.textContent="Mon"
         }
         if(heft==3){
             hefteningunu1.textContent="Wed"
             hefteningunu2.textContent="Thu"
             hefteningunu3.textContent="Fri"
             hefteningunu4.textContent="Sat"
             hefteningunu5.textContent="Sun"
             hefteningunu6.textContent="Mon"
             hefteningunu7.textContent="Tue"
         }
         if(heft==4){
             hefteningunu1.textContent="Thu"
             hefteningunu2.textContent="Fri"
             hefteningunu3.textContent="Sat"
             hefteningunu4.textContent="Sun"
             hefteningunu5.textContent="Mon"
             hefteningunu6.textContent="Tue"
             hefteningunu7.textContent="Wed"
            }
            if(heft==5){
                hefteningunu1.textContent="Fri"
                hefteningunu2.textContent="Sat"
                hefteningunu3.textContent="Sun"
                hefteningunu4.textContent="Mon"
                hefteningunu5.textContent="Tue"
                hefteningunu6.textContent="Wed"
                hefteningunu7.textContent="Thu"
         }
         if(heft==6){
            hefteningunu3.textContent="Mon"
            hefteningunu4.textContent="Tue"
            hefteningunu5.textContent="Wed"
            hefteningunu6.textContent="Thu"
            hefteningunu7.textContent="Fri"
            hefteningunu1.textContent="Sat"
            hefteningunu2.textContent="Sun"
         }
         let button=document.querySelector(".button")
         button.addEventListener("click",()=>{
            Result.remove()
            axtar.style.display="flex";
            axtar.addEventListener("click",()=>{
                axtar.style.display="none";
                SearchBox.style.display="flex";
    search.value=""
            })
         })
        getWeatherInfo(search.value);
    }
    else {
        return;
    }
});
