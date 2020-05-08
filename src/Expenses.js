import React from "react";
import "./styles.css";

function Expenses(props) {
  const {
    setExpenses,
    toggleFormThree,
    toggleFormTwo,
    toggleFormFour,
    flip,
    updateFlip,
  } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className={flip ? "card" : "flip-card"}>
          <div className={flip ? "card-inner" : "flip-card-inner"}>
            <h2>Expenses</h2>
            <span>annual expenses $</span>
            <input
              onChange={(e) => setExpenses(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
            />
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  toggleFormTwo(true);
                  toggleFormThree(false);
                  window.scroll(0, 0);
                }}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={() => {
                  toggleFormThree(false);
                  toggleFormFour(true);
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

export default Expenses;
