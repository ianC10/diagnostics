import React from 'react';

const TemperatureData2: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="temp-data">
        <div className="panel-title">OBC Temperature</div>
        <br></br>
        <br></br>
        <div className="panel-info">Current temp</div>
        <div className="temperature-value">37 C</div>
        <div className="temp-data-image">
            <img src="/images/Good cell.svg" alt="TempSuccess" />
        </div>
        <div className="temp-line"></div>
      </div>
    </div>
  );
};

export default TemperatureData2;