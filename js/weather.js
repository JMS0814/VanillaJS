const API_KEY = "a1642a3702dc9a74ece7de99a9a589e6";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric `;
    fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });
    

}

function onGeoError() {
    alert("위치를 확인할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

