import React from "react";
import "./styles.css";

function CurrentAge(props) {
  const { setAge, age, updateActiveForm } = props;
  return (
    <div className="field">
      <h1 className="title">Age of Freedom</h1>
      <h2 className="sub-title">
        See how early you could reach financial independence!
      </h2>
      <div className="scene">
        <div className="card">
          <div className="card-inner">
            <h2>Current Age</h2>
            <input
              onChange={(e) => {
                setAge(parseInt(e.target.value, 10));
              }}
              type="text"
              maxLength="2"
              placeholder={age > 0 ? age : ""}
            />
            <button
              className="next"
              onClick={() => {
                updateActiveForm(1);
                window.scroll(0, 0);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentAge;
