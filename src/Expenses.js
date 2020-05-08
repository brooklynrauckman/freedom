import React from "react";
import "./styles.css";

function Expenses(props) {
  const { setExpenses, toggleFormThree, toggleFormTwo, toggleFormFour } = props;
  return (
    <div className="field">
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
  );
}

export default Expenses;
