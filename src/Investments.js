import React from "react";
import "./styles.css";

function Investments(props) {
  const {
    setOtherCont,
    otherCont,
    setOtherRate,
    otherRate,
    setOtherValue,
    otherValue,
    updateActiveForm,
    findAge,
    calcFire,
    calcInvest,
    calcCompoundIncome,
    calcCompoundExpenses,
  } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className="card">
          <div className="card-inner">
            <h2>Accessable Investments</h2>
            <span>current value $</span>
            <input
              onChange={(e) => setOtherValue(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
              placeholder={otherValue > 0 ? otherValue : ""}
            />
            <span>interest rate %</span>
            <input
              onChange={(e) => setOtherRate(parseInt(e.target.value, 10))}
              type="text"
              maxLength="2"
              placeholder={otherRate > 0 ? otherRate : ""}
            />
            <span>annual contribution $</span>
            <input
              onChange={(e) => setOtherCont(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
              placeholder={otherCont > 0 ? otherCont : ""}
            />
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  updateActiveForm(3);
                  window.scroll(0, 0);
                }}
              >
                Previous
              </button>
              <button
                className="calculate"
                onClick={() => {
                  calcCompoundIncome();
                  calcCompoundExpenses();
                  calcInvest();
                  calcFire();
                  findAge();
                  updateActiveForm(5);
                  window.scroll(0, 0);
                }}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investments;
