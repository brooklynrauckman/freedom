import React from "react";
import "./styles.css";

function Savings(props) {
  const {
    setSavingsCont,
    setSavingsRate,
    setSavingsValue,
    toggleFormThree,
    toggleFormFive,
    toggleFormFour,
  } = props;
  return (
    <div className="field">
      <h2>Savings</h2>
      <span>current value $</span>
      <input
        onChange={(e) => setSavingsValue(parseInt(e.target.value, 10))}
        type="text"
        maxLength="8"
      />
      <span>interest rate %</span>
      <input
        onChange={(e) => setSavingsRate(parseInt(e.target.value, 10))}
        type="text"
        maxLength="2"
      />
      <span>annual contribution $</span>
      <input
        onChange={(e) => setSavingsCont(parseInt(e.target.value, 10))}
        type="text"
        maxLength="8"
      />
      <div className="nav-buttons">
        <button
          className="previous"
          onClick={() => {
            toggleFormThree(true);
            toggleFormFour(false);
            window.scroll(0, 0);
          }}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={() => {
            toggleFormFour(false);
            toggleFormFive(true);
            window.scroll(0, 0);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Savings;
