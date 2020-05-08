import React from "react";
import "./styles.css";

function Income(props) {
  const {
    setIncome,
    setRaise,
    setTaxCat,
    toggleFormThree,
    toggleFormTwo,
    toggleFormOne,
    flip,
    updateFlip,
  } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className={flip ? "card" : "flip-card"}>
          <div className={flip ? "card-inner" : "flip-card-inner"}>
            <h2>Income</h2>
            <span>annual gross income $</span>
            <input
              onChange={(e) => setIncome(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
            />
            <span>annual raise %</span>
            <input
              onChange={(e) => setRaise(parseInt(e.target.value, 10))}
              type="text"
              maxLength="2"
            />
            <span>tax filing category</span>
            <select onChange={(e) => setTaxCat(e.target.value)}>
              <option> </option>
              <option>single</option>
              <option>married filing jointly</option>
              <option>married filing seperate</option>
              <option>head of household</option>
            </select>
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  toggleFormOne(true);
                  toggleFormTwo(false);
                  window.scroll(0, 0);
                }}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={() => {
                  toggleFormTwo(false);
                  toggleFormThree(true);
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

export default Income;
