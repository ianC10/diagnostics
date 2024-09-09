import React from 'react';

const BatteryStatus: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="status-battery-error">
        <div className="panel-title">Battery Error Status</div>
        <br></br>
        <div className="error-status-image">
          <img src="images/Good cell.svg" alt="GoodCell" />
        </div>
        <div className="battery-working">Currently Working Fine.</div>
        <div className="panel-info">Last Error</div>
        <div className="panel-info">Code: 232</div>
        <div className="panel-info">on 23/7 15:30</div>  
        <button className="check-history">
          <img src="images/Error Status.svg" alt="CheckHistory"/>
        </button>      
      </div>
      <div className="battery-capacity">
        <div className="panel-title">Battery Capacity</div>
        <div className="panel-info">Est. Battery</div>
        <div className="panel-info">Capacity (0 to</div>
        <div className="panel-info">300Ah)</div>
        <div className="status-panel-value">257 Ah</div>
      </div>
    </div>
  );
};

export default BatteryStatus;