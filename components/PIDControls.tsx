import React from 'react';

const PIDControls: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="pid-controls-box">
        <div className="panel-title">PID Controls</div>
        <br></br>
        <div className="control-item">
          <span className="control-label">Master Control</span>
          <span className="control-status">ON</span>
        </div>
        <div className="control-item">
          <span className="control-label">Steering Rack</span>
          <span className="control-status">OFF</span>
        </div>
        <div className="control-item">
          <span className="control-label">Brake</span>
          <span className="control-status">OFF</span>
        </div>
        <div className="control-item">
          <span className="control-label">Motors</span>
          <span className="control-status">OFF</span>
        </div>
        <div className="status-charge-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car2" />
      </div>
    </div>
  );
};

export default PIDControls;