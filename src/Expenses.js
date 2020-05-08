import React from "react";
import "./styles.css";

function Expenses(props) {
  const { setExpenses, expenses, updateActiveForm } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className="card">
          <div className="card-inner">
            <h2>Expenses</h2>
            <span>annual expenses $</span>
            <input
              onChange={(e) => setExpenses(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
              placeholder={expenses > 0 ? expenses : ""}
            />
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  updateActiveForm(1);
                  window.scroll(0, 0);
                }}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={() => {
                  updateActiveForm(3);
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
