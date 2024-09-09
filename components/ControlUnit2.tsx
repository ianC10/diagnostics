import React from 'react';

const ControlUnit2: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="control-unit-box">
        <div className="panel-title">Control Unit 2</div>
        <br></br>
        <div className="control-unit-item">
          <span className="control-unit-label">MPU Motion Planner</span>
          <span className="control-unit-status">Status</span>
          <span className="control-unit-status-detail">ACTIVE</span>
        </div>
        <div className="control-unit-item">
          <span className="control-unit-label">ECU1-VCU</span>
          <span className="control-unit-status">Heartbeat</span>
          <span className="control-unit-status-detail">BEATING</span>
          <span className="control-unit-status">Active Soul</span>
          <span className="control-unit-status-detail">MAIN</span>
        </div>
        <div className="control-unit-item">
          <span className="control-unit-label">ECUX-FCU</span>
          <span className="control-unit-status">Heartbeat</span>
          <span className="control-unit-status-detail">BEATING</span>
        </div>
        <div className="control-unit-item">
          <span className="control-unit-label">ECU3-DoorECU</span>
          <span className="control-unit-status">Heartbeat</span>
          <span className="control-unit-status-detail">BEATING</span>
          <span className="control-unit-status">Active Soul</span>
          <span className="control-unit-status-detail">MAIN</span>
        </div>
        <div className="control-unit-item">
          <span className="control-unit-label">ECU4-RPi-OUT</span>
          <span className="control-unit-status">Heartbeat</span>
          <span className="control-unit-status-detail">BEATING</span>
        </div>
        <div className="control-unit-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car3" />
      </div>
    </div>
  );
};

export default ControlUnit2;