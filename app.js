const temp = document.querySelector(".temperature h3");
const locationZone = document.querySelector("header h4");
const climatic = document.querySelector(".weather");
const appID = "191789f7840621a53dc7ca630cd9889f";
const inputFiled = document.getElementById("input-field");
const form = document.querySelector("#form");

let inputValue;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValue = inputFiled.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&lang=it&appid=${appID}`
  )
    .then((response) => response.json())
    .then((response) => {
      locationZone.textContent = response.name;
      temp.textContent = Math.floor(response.main.temp) + "°";
      climatic.textContent = response.weather[0].description;
  
  
      const today = document.querySelector(".day");
      let utcSeconds = response.dt;
      let d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      today.textContent = d;

    });
    
    inputValue = ''
});

