import './css/index.css';

const input = document.getElementById('input');
const form = document.querySelector('form');
const divContainer = document.querySelector('.container');

const tempEl = document.querySelector('.ttl');
const iconEl = document.querySelector('.icon');
const detailsEL = document.querySelector('.condtn');
const cityNameEl = document.querySelector('.name');
const feelsLike = document.querySelector('.nm1');
const humid = document.querySelector('.nm2');
const speed = document.querySelector('.nm3');
const visibility = document.querySelector('.nm4');
const pressure = document.querySelector('.nm5');

const apikey = '8ae46e01455a447a2e0729a8325fcce2';
const axios = require('axios');
data();

form.addEventListener('submit', city);

function city(e) {
  e.preventDefault();

  data();
}

async function data() {
  const res = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      !input.value ? 'lagos' : input.value
    }&appid=${apikey}&units=metric`
  );
  const data = res.data;
  const tempreture = Math.round(data.main.temp);
  const feels = Math.round(data.main.feels_like);
  const humidity = Math.round(data.main.humidity);

  feelsLike.innerHTML = `${feels}°`;
  humid.innerHTML = `${humidity}%`;

  tempEl.innerHTML = `${tempreture}°C`;
  iconEl.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  detailsEL.innerHTML = `${data.weather[0].main}`;
  detailsEL.innerHTML = `${data.weather[0].main}`;
  cityNameEl.innerHTML = `${data.name}, ${data.sys.country}`;
  speed.innerHTML = `${Math.round(data.wind.speed)}`;
  visibility.innerHTML = `${data.visibility}`;
  pressure.innerHTML = `${data.main.pressure}`;
  input.value = '';
}

/* const temp = Math.ceil(data.main.temp);
  const icon = document.getElementById('box');
  icon.innerHTML = `
  <img
  src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"
  alt="rainy"
/>
<p>${data.weather[0].description}</p>

<h1>${temp}°C</h1>
<p>${data.name}</p>
  `; */

/* 
const apikey = '8ae46e01455a447a2e0729a8325fcce2';
const axios = require('axios');

async function data() {
  const res = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${apikey}&units=metric`
  );

  console.log(res);
} */

/*    weatherDataEl. querySelector (".icon").innerHTML = <img src= "http://openweathermap.
org/img/wn/$63.png" alt= "Weather Icon"> */
