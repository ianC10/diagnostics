import React from 'react';

const ControlUnit3: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="control-unit-box">
        <div className="panel-title">Control Unit 3</div>
        <br></br>
        <div className="control-unit3-item">
          <span className="control-unit3-label">ECU5 RPI-IN</span>
          <span className="control-unit3-status">Heartbeat</span>
          <span className="control-unit3-status-detail">BEATING</span>
        </div>
        <div className="control-unit3-item">
          <span className="control-unit3-label">ECU7-HVAC</span>
          <span className="control-unit3-status">Heartbeat</span>
          <span className="control-unit3-status-detail">BEATING</span>
        </div>
        <div className="control-unit3-item">
          <span className="control-unit3-label">ECU8-USU</span>
          <span className="control-unit3-status">Heartbeat</span>
          <span className="control-unit3-status-detail">BEATING</span>
        </div>
        <div className="control-unit3-item">
          <span className="control-unit3-label">ECU9-LCU</span>
          <span className="control-unit3-status">Heartbeat</span>
          <span className="control-unit3-status-detail">BEATING</span>
        </div>
        <div className="control-unit3-item">
          <span className="control-unit3-label">ECU10 DashboardECU</span>
          <span className="control-unit3-status">Heartbeat</span>
          <span className="control-unit3-status-detail">BEATING</span>
        </div>
        <div className="control-unit3-item">
          <span className="control-unit3-label">ECU11-TableECU</span>
          <span className="control-unit3-status">Heartbeat</span>
          <span className="control-unit3-status-detail">BEATING</span>
        </div>
        <div className="control-unit-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car3" />
      </div>
    </div>
  );
};

export default ControlUnit3;