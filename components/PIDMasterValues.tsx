import React from 'react';

const PIDMasterValues: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="pid-values-container">
        <div className='panel-title'>PID Master Values</div>
        <div className="pid-values">
          <div className="pid-value-item">
            <span className="pid-label">Steering PID Output (+/- 1024)</span>
            <span className="pid-value">504</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Brake PID Output (+/- 1024)</span>
            <span className="pid-value">203</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Motor R PID Output (0 to 5000)</span>
            <span className="pid-value">2500</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Motor R PID Output (0 to 5000)</span>
            <span className="pid-value">2500</span>
          </div>
          <div className="pid-value-item">
            <span className="pid-label">Master PID Output (0 to 1000)</span>
            <span className="pid-value">350</span>
          </div>
        </div>
        <div className="pid-master-line"></div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
    </div>
  );
};

export default PIDMasterValues;