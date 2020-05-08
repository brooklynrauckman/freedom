import React from "react";
import "./styles.css";

function CurrentAge(props) {
  const { setAge, toggleFormTwo, toggleFormOne } = props;
  return (
    <div className="field">
      <h2>Current Age</h2>
      <input
        onChange={(e) => setAge(parseInt(e.target.value, 10))}
        type="text"
        maxLength="2"
      />
      <button
        className="next"
        onClick={() => {
          toggleFormOne(false);
          toggleFormTwo(true);
          window.scroll(0, 0);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default CurrentAge;
