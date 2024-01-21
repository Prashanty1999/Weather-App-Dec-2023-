let search=document.getElementById("search");
let form =document.querySelector("form");  
let weather =document.getElementById("weather");
let body=document.querySelector('body')
let api_key='3cd8385f493493bf74bb8b53bd7f6423';


let getweather = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    let response = await fetch (url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    showweather(data);
}
let showweather = (data)=>{
    if(data.cod >= '404') {
        weather.innerHTML=`<h2>Oops! city not found!</h2>`;
        return;
    }
    weather.innerHTML=`
    <div >
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather" height="100px" width="80px" >
            </div>
            <div>
                <h2>${data.main.temp} </h2>
                <h4>${data.weather[0].main} </h4>
            </div>
`;
}
body.onload=()=>{
    weather.innerHTML=
   ` <div >
                <img src="https://openweathermap.org/img/wn/50n@2x.png" alt="weather" height="100px" width="80px" >
            </div>
            <div>
                <h2>32°C </h2>
                <h4>Haze</h4>
            </div>`
}

form.addEventListener('submit',function(event){
    getweather(search.value);
    event.preventDefault();

})
