import React from 'react';

const ChargingTime: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="charge-level">
        <div className="panel-title">Charging Time</div>
        <br></br>
        <div className="panel-info">Est. time to full</div>
        <div className="panel-info">(0 to 999m)</div>
        <div className="charging-time-value">120m</div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ChargingTime;