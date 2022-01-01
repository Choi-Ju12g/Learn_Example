// https://openweathermap.org/ api 사용

const API_KEY = "eeab50c141f46ad8216800abbc257089";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url);

}

function onGeoError(){
    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);