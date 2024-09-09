import React from 'react';

const ChargingStatus: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="status-charge">
        <div className="panel-title">Charging Status</div>
        <br></br>
        <div className="panel-info">MOSFET</div>
        <div className="panel-info">Charging</div>
        <br></br>
        <div className="panel-info">MOSFET</div>
        <div className="panel-info">Discharging</div>
        <div className="charging-status">Not connected to charger</div>
        <div className="mosfet-status">YES</div>
        <div className="mosfet-status">NO</div>
        <div className="status-charge-line"></div>
      </div>
    </div>
  );
};

export default ChargingStatus;