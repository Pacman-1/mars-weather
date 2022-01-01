import './App.css';

function App() {
  return (
    <div className="App">

      <div className="mars-weather">
        <h4 className="rover-title">Rovers image of the day</h4>
      <h1 className="main-title">Current Weather at elysim planitia</h1>

      <h6 className="insight">InSight rover is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars. InSight is a Mars lander designed to give the Red Planet its first thorough checkup since it formed 4.5 billion years ago.</h6>

        <div className="sol-day">
          <h2 className='sol-date'>Sol 504</h2> <hr className='line-through' /> <p className='date'>June 13th</p> <p className="wind">Wind</p>
        </div>

        <div className="sol-day-temp">
          <h2 className='temp'>Temperature</h2> <hr className='line-through2' />
          <p className="temp-high">High:</p>
          <p className="temp-low">Low:</p>
        </div>

      </div>
      <div className="previous-days">
        <div className="day"><p> Sol 498</p> <p> June 8th</p>  <hr className='underLine' /> <p>High:</p> <p>Low:</p></div>
        

        <div className="day"><p> Sol 498</p> <p> June 8th</p>  <hr className='underLine' /> <p>High:</p> <p>Low:</p></div>


        <div className="day"><p> Sol 498</p> <p> June 8th</p>  <hr className='underLine' /> <p>High:</p> <p>Low:</p></div>



        <div className="day"><p> Sol 498</p> <p> June 8th</p>  <hr className='underLine' /> <p>High:</p> <p>Low:</p></div>


        <div className="day"><p> Sol 498</p> <p> June 8th</p>  <hr className='underLine' /> <p>High:</p> <p>Low:</p></div>


        <div className="day"><p> Sol 498</p> <p> June 8th</p>  <hr className='underLine' /> <p>High:</p> <p>Low:</p></div>
      </div>

      
     
    </div>
  );
}

export default App;
