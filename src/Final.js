import React from "react";
import "./styles.css";

function Final(props) {
  const { freeAge, fireValue, updateActiveForm } = props;
  return (
    <div className="field">
      <h1 className="title">Age of Freedom</h1>
      <div className="scene">
        <div className="card">
          <div className="card-inner">
            <h1 className="free-age">{freeAge}</h1>
            <p>
              At age {freeAge} - ceteris paribus - you will be financially
              independent. Your available assets will have exceeded $
              {fireValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.
            </p>
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  updateActiveForm(4);
                  window.scroll(0, 0);
                }}
              >
                Previous
              </button>
              <button
                className="restart"
                onClick={() => {
                  window.location.reload();
                  window.scroll(0, 0);
                }}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final;
