import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const api = ',us&units=imperial&appid=924ecca5b51816bbb81c4d4d9fe65e5b';
const iconURL = 'http://openweathermap.org/img/w/';

const mapDispatchToProps = (dispatch) => ({
  addPlant: (name) => dispatch(actions.addPlant(name)),
});

async function addPlantToServer(obj) {
  try {
    const response = await fetch('http://localhost:3000/api/plant', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-type': 'Application/JSON' },
    });
    const data = await response.json();
  } catch (error) {
    console.log('error - addingtoserver', error);
  }
}

const getWeather = async (url, key) => {
  let response = await fetch(baseURL + 20817 + api);
  try {
    let data = await response.json();
    let weatherData = [
      data.weather[0],
      data.main.temp,
      data.main.temp_max,
      data.main.temp_min,
    ];
    document.getElementById(
      'weather-icon'
    ).src = `${iconURL}${weatherData[0].icon}.png`;
    document.getElementById('high').innerText = weatherData[2] + '℉';
    document.getElementById('low').innerText = weatherData[3] + '℉';
    document.getElementById('current').innerText = weatherData[1] + '℉';
    const anc = document.getElementById('nav');
    if (weatherData[2] > 85 || weatherData[1] > 85 || weatherData[3] > 85) {
      anc.insertAdjacentHTML(
        'beforebegin',
        `<div id='hot'>Oh! It looks kind of hot today! Make sure to water any thirsty plants and protect sensitive ones from the sun!</div>`
      );
      const hot = document.getElementById('hot');
      hot.onclick = () => {
        hot.remove();
      };
    }
    if (weatherData[2] < 60 || weatherData[1] < 60 || weatherData[3] < 60) {
      anc.insertAdjacentHTML(
        'beforebegin',
        `<div id='cold'>Wow! It looks kind of cold today! Make sure to take in any outdoor plants that might not like that :)</div>`
      );
      const cold = document.getElementById('cold');
      cold.onclick = () => {
        cold.remove();
      };
    }
    return weatherData;
  } catch (error) {
    console.log('error', error);
  }
};

const NavBar = (props) => {
  useEffect(() => {
    const weather = getWeather(baseURL, api);
  });
  return (
    <div id='nav'>
      <label htmlFor='plant-name'>Plant Name:</label>
      <input id='new-plant-name' height='30px;'></input>
      <a
        id='addButton'
        onClick={() => {
          let nameVal = document.getElementById('new-plant-name');
          if (nameVal.value.length > 0) {
            props.addPlant({
              name: nameVal.value,
            });
            addPlantToServer({ name: nameVal.value });
          } else {
            nameVal.style.borderColor = 'red';
          }
          nameVal.value = '';
        }}
      >
        Add Plant
      </a>
      <label htmlFor='weather'>Weather Today: </label>
      <div id='weather'>
        <img id='weather-icon' alt='weather picture'></img>
        <label htmlFor='current'>Current: </label>
        <span id='current'></span>
        <label htmlFor='high'>High: </label>
        <span id='high'></span>
        <label htmlFor='low'>Low: </label>
        <span id='low'></span>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(NavBar);
