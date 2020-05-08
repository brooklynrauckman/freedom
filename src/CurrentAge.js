import React from "react";
import "./styles.css";

function CurrentAge(props) {
  const { setAge, toggleFormTwo, toggleFormOne, flip, updateFlip } = props;
  return (
    <div className="field">
      <div className="scene">
        <div className={flip ? "card" : "flip-card"}>
          <div className={flip ? "card-inner" : "flip-card-inner"}>
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
                updateFlip(!flip);
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
