import React from "react";
import "./styles.css";

function Investments(props) {
  const {
    setOtherCont,
    setOtherRate,
    setOtherValue,
    toggleFormSix,
    toggleFormFive,
    toggleFormFour,
    findAge,
    calcFire,
    calcInvest,
    calcCompoundIncome,
    calcCompoundExpenses,
    flip,
    updateFlip,
  } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className={flip ? "card" : "flip-card"}>
          <div className={flip ? "card-inner" : "flip-card-inner"}>
            <h2>Accessable Investments</h2>
            <span>current value $</span>
            <input
              onChange={(e) => setOtherValue(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
            />
            <span>interest rate %</span>
            <input
              onChange={(e) => setOtherRate(parseInt(e.target.value, 10))}
              type="text"
              maxLength="2"
            />
            <span>annual contribution $</span>
            <input
              onChange={(e) => setOtherCont(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
            />
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  toggleFormFour(true);
                  toggleFormFive(false);
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
                  toggleFormFive(false);
                  toggleFormSix(true);
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
