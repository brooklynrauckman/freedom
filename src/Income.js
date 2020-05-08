import React from "react";
import "./styles.css";

function Income(props) {
  const {
    setIncome,
    income,
    setRaise,
    raise,
    setTaxCat,
    taxCat,
    updateActiveForm,
  } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className="card">
          <div className="card-inner">
            <h2>Income</h2>
            <span>annual gross income $</span>
            <input
              onChange={(e) => setIncome(parseInt(e.target.value, 10))}
              type="text"
              maxLength="8"
              placeholder={income > 0 ? income : ""}
            />
            <span>annual raise %</span>
            <input
              onChange={(e) => setRaise(parseInt(e.target.value, 10))}
              type="text"
              maxLength="2"
              placeholder={raise > 0 ? raise : ""}
            />
            <span>tax filing category</span>
            <select onChange={(e) => setTaxCat(e.target.value)}>
              <option disabled selected>
                {taxCat}
              </option>
              <option>single</option>
              <option>married filing jointly</option>
              <option>married filing seperate</option>
              <option>head of household</option>
            </select>
            <div className="nav-buttons">
              <button
                className="previous"
                onClick={() => {
                  updateActiveForm(0);
                  window.scroll(0, 0);
                }}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={() => {
                  updateActiveForm(2);
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
