import React from "react";
import "./styles.css";

function Savings(props) {
  const {
    setSavingsCont,
    savingsCont,
    setSavingsRate,
    savingsRate,
    setSavingsValue,
    savingsValue,
    updateActiveForm,
  } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className="card">
          <div className="card-inner">
            <h2>Savings</h2>
            <span>current value $</span>
            <input
              onChange={(e) => setSavingsValue(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
              placeholder={savingsValue > 0 ? savingsValue : ""}
            />
            <span>interest rate %</span>
            <input
              onChange={(e) => setSavingsRate(parseInt(e.target.value, 10))}
              type="text"
              maxLength="2"
              placeholder={savingsRate > 0 ? savingsRate : ""}
            />
            <span>annual contribution $</span>
            <input
              onChange={(e) => setSavingsCont(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
              placeholder={savingsCont > 0 ? savingsCont : ""}
            />
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  updateActiveForm(2);
                  window.scroll(0, 0);
                }}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={() => {
                  updateActiveForm(4);
                  window.scroll(0, 0);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Savings;
