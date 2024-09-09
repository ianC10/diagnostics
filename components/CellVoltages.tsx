import React from 'react';

const CellVoltage: React.FC = () => {
  return (
    <div className="voltage-current-container">
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car"/>
      </div>
      <div className="cell-voltage">
        <div className="panel-title">Cell Voltages</div>
        <div className="panel-info">Avg Cell</div>
        <div className="panel-info">Voltage (0 to</div>
        <div className="panel-info">5 V)</div>
        <br></br>
        <div className="panel-info">Min Cell</div>
        <div className="panel-info">Voltage</div>
        <br></br>
        <div className="panel-info">Max Cell</div>
        <div className="panel-info">Voltage</div>
        <br></br>
        <div className="panel-info">Min/Max</div>
        <div className="panel-info">Voltage Cell</div>
        <div className="panel-info">Count</div>
        <div className="cell-voltage-line"></div>
        <div className="voltage-value-avg">3.3 V</div>
        <div className="voltage-value-min">0.5 V</div>
        <div className="voltage-value-max">4.5 V</div>
        <div className="min-max">10 cells min / 12 cells max</div>
      </div>  
    </div>
  );
};

export default CellVoltage;