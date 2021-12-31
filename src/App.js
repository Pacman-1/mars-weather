import './App.css';

function App() {
  return (
    <div className="App">

      <div className="mars-weather">
        <h4 className="rover-title">Rovers image of the day</h4>
      <h1 className="main-title">Current Weather at elysim planitia</h1>

        <div className="sol-day">
          <h2 className='sol-date'>Sol 504</h2> <p className='date'>June 13th</p> <p className="wind">Wind</p>
        </div>

        <div className="sol-day-temp">
          <h2 className='temp'>Temperature</h2>
          <p className="temp-high">High:</p>
          <p className="temp-low">Low:</p>
        </div>

 

      </div>
     
    </div>
  );
}

export default App;
