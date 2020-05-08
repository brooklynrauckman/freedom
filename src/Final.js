import React from "react";
import "./styles.css";

function Final(props) {
  const { freeAge, toggleFormSix, toggleFormOne } = props;
  return (
    <div>
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
  );
}

export default Final;
