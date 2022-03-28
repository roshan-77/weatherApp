
const city = document.querySelector(".city");
const display_btn = document.querySelector(".display");
const clear_btn = document.querySelector(".clear");
const val_sky = document.querySelector(".sky p");
const val_wind = document.querySelector(".wind p");
const val_clouds = document.querySelector(".clouds p");
const val_sunrise = document.querySelector(".sunrise p");
const val_sunset = document.querySelector(".sunset p");
const weather_description =document.querySelector('.weather-description');
const temp = document.querySelector(".temp");
const feels_like = document.querySelector(".feels-like")
const temp_min = document.querySelector(".temp-min");
const temp_max = document.querySelector(".temp-max");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const display_city = document.querySelector(".display-city");
const error_text = document.querySelector('.error-text');

const parameters = {
    key: "0e552f65ab7dad48d89fba11788d1f1f",
    base: "https://api.openweathermap.org/data/2.5/weather?q="
}


display_btn.addEventListener("click",function myVal(){
    if (city.value == ''){
        alert("Please enter a valid city name")
    }else{
        //fetching weather api
        fetch(`${parameters.base}${city.value}&appid=${parameters.key}&units=metric`)
        .then(response => response.json())
        .then((data)=>display(data)).catch(function (e){
            error_text.innerHTML = "You must have mistyped city name";
        })
    }
    //once the value is taken, clear the inptut field
    city.val='';
    error_text.innerText='';
    
})

//clear the input field
clear_btn.addEventListener("click",()=>
city.value=''
) 


//function to add all the values in the website
function display(data){
    val_sky.innerText = data.weather[0].main;
    val_wind.innerText = data.wind.speed + 'm/s';
    val_clouds.innerText = data.clouds.all +'%';
    let sunriseTime = data.sys.sunrise;
    val_sunrise.innerText = new Date((sunriseTime)*1000).toLocaleTimeString()
    val_sunset.innerText = new Date(data.sys.sunset*1000).toLocaleTimeString();

    weather_description.innerText = "Weather description: " + data.weather[0].description;

    temp.innerText = data.main.temp + "\u2103";
    feels_like.innerText = data.main.feels_like + "\u2103";
    temp_min.innerText = data.main.temp_min + "\u2103";
    temp_max.innerText = data.main.temp_max + "\u2103";
    pressure.innerText = data.main.pressure + 'hPa';
    humidity.innerText = data.main.humidity + '%';

    display_city.innerText = city.value;

}

