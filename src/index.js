import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
const currentSol =document.querySelector(".sol-date") 
const API_KEY ="EsxuGjCL1wkqkoPcEMWpN3RRnfkAc66PpmULpnbP"
const API_URL=`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`

function getWeather() {
  fetch(API_URL).then(res=> res.json())
  .then(data =>{
    const {
      sol_keys,
      validity_checks,
      ...solData
    }=data
    console.log(solData)
  })
  
}

function displayToday(){

}

getWeather()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
