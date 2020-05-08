import React from "react";
import "./styles.css";

function Final(props) {
  const { freeAge, toggleFormSix, toggleFormOne, flip, updateFlip } = props;
  return (
    <div>
      <div className="scene">
        <div className={flip ? "card" : "flip-card"}>
          <div className={flip ? "card-inner" : "flip-card-inner"}>
            <h1 className="free-age">{freeAge}</h1>
            <button
              className="restart"
              onClick={() => {
                toggleFormOne(true);
                toggleFormSix(false);
                window.scroll(0, 0);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final;
