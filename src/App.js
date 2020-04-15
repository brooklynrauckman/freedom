import React, { useState } from "react";
import "./styles.css";

function App() {
  const [age, setAge] = useState(0);
  const [freeAge, setFreeAge] = useState(65);
  const [income, setIncome] = useState(0);
  const [raise, setRaise] = useState(0);
  const [taxCat, setTaxCat] = useState("");
  const [expenses, setExpenses] = useState(0);
  const [savingsCont, setSavingsCont] = useState(0);
  const [otherCont, setOtherCont] = useState(0);
  const [savingsRate, setSavingsRate] = useState(0);
  const [otherRate, setOtherRate] = useState(0);
  const [savingsValue, setSavingsValue] = useState(0);
  const [otherValue, setOtherValue] = useState(0);
  const [formOne, toggleFormOne] = useState(true);
  const [formTwo, toggleFormTwo] = useState(false);
  const [formThree, toggleFormThree] = useState(false);
  const [formFour, toggleFormFour] = useState(false);
  const [formFive, toggleFormFive] = useState(false);
  const [formSix, toggleFormSix] = useState(false);

  let compoundExpenses;
  let compoundIncome;
  let invest;
  let fire;
  let fireAge = 64;

  const calcCompoundExpenses = () => {
    const equation = expenses * ((1 + 0.02) ^ (fireAge - age));
    compoundExpenses = equation;
  };

  const calcCompoundIncome = () => {
    const tax1 = 0.1;
    const tax2 = 0.12;
    const tax3 = 0.22;
    const tax4 = 0.24;
    const tax5 = 0.32;
    const tax6 = 0.35;
    const tax7 = 0.37;
    const incomeLevel1 = 9876;
    const incomeLevel2 = 13851;
    const incomeLevel3 = 19751;
    const incomeLevel4 = 40126;
    const incomeLevel5 = 52851;
    const incomeLevel6 = 80251;
    const incomeLevel7 = 84201;
    const incomeLevel8 = 85526;
    const incomeLevel9 = 160701;
    const incomeLevel10 = 160726;
    const incomeLevel11 = 171051;
    const incomeLevel12 = 204101;
    const incomeLevel13 = 321451;
    const incomeLevel14 = 408201;
    const incomeLevel15 = 510301;
    const incomeLevel16 = 612351;

    let taxBracket;

    if (
      (taxCat === "single" || taxCat === "married filing seperate") &&
      income < incomeLevel1
    ) {
      taxBracket = tax1;
    } else if (
      (taxCat === "single" || taxCat === "married filing seperate") &&
      income > incomeLevel1 &&
      income < incomeLevel4
    ) {
      taxBracket = tax2;
    } else if (
      (taxCat === "single" || taxCat === "married filing seperate") &&
      income > incomeLevel4 &&
      income < incomeLevel8
    ) {
      taxBracket = tax3;
    } else if (
      (taxCat === "single" || taxCat === "married filing seperate") &&
      income > incomeLevel8 &&
      income < incomeLevel10
    ) {
      taxBracket = tax4;
    } else if (
      (taxCat === "single" || taxCat === "married filing seperate") &&
      income > incomeLevel10 &&
      income < incomeLevel12
    ) {
      taxBracket = tax5;
    } else if (
      (taxCat === "single" || taxCat === "married filing seperate") &&
      income > incomeLevel12 &&
      income < incomeLevel15
    ) {
      taxBracket = tax6;
    } else if (
      (taxCat === "single" || taxCat === "married filing seperate") &&
      income > incomeLevel15
    ) {
      taxBracket = tax7;
    } else if (taxCat === "married filing jointly" && income < incomeLevel3) {
      taxBracket = tax1;
    } else if (
      taxCat === "married filing jointly" &&
      income > incomeLevel3 &&
      income < incomeLevel6
    ) {
      taxBracket = tax2;
    } else if (
      taxCat === "married filing jointly" &&
      income > incomeLevel6 &&
      income < incomeLevel11
    ) {
      taxBracket = tax3;
    } else if (
      taxCat === "married filing jointly" &&
      income > incomeLevel11 &&
      income < incomeLevel13
    ) {
      taxBracket = tax4;
    } else if (
      taxCat === "married filing jointly" &&
      income > incomeLevel13 &&
      income < incomeLevel14
    ) {
      taxBracket = tax5;
    } else if (
      taxCat === "married filing jointly" &&
      income > incomeLevel14 &&
      income < incomeLevel16
    ) {
      taxBracket = tax6;
    } else if (taxCat === "married filing jointly" && income > incomeLevel16) {
      taxBracket = tax7;
    } else if (taxCat === "head of household" && income < incomeLevel2) {
      taxBracket = tax1;
    } else if (
      taxCat === "head of household" &&
      income > incomeLevel2 &&
      income < incomeLevel5
    ) {
      taxBracket = tax2;
    } else if (
      taxCat === "head of household" &&
      income > incomeLevel5 &&
      income < incomeLevel7
    ) {
      taxBracket = tax3;
    } else if (
      taxCat === "head of household" &&
      income > incomeLevel7 &&
      income < incomeLevel9
    ) {
      taxBracket = tax4;
    } else if (
      taxCat === "head of household" &&
      income > incomeLevel9 &&
      income < incomeLevel12
    ) {
      taxBracket = tax5;
    } else if (
      taxCat === "head of household" &&
      income > incomeLevel12 &&
      income < incomeLevel15
    ) {
      taxBracket = tax6;
    } else if (taxCat === "head of household" && income > incomeLevel15) {
      taxBracket = tax7;
    } else console.log("no");

    const equation =
      (income * ((1 + raise / 100) ^ (fireAge - age))) *
        (1 - taxBracket) -
      savingsCont -
      otherCont;
    compoundIncome = equation;
  };

  const calcInvest = () => {
    const savingsInvest =
      (savingsValue + savingsCont) *
      ((1 + savingsRate / 100) ^ (fireAge - age));
    const otherInvest =
      (otherValue + otherCont) * ((1 + otherRate / 100) ^ (fireAge - age));
    const equation = savingsInvest + otherInvest;
    invest = equation;
  };

  const calcFire = () => {
    const equation = compoundIncome - compoundExpenses + invest;
    fire = equation;
  };

  const findAge = () => {
    while (fire > 25 * expenses) {
      fireAge = fireAge - 1;
      calcCompoundIncome();
      calcCompoundExpenses();
      calcInvest();
      calcFire();
    }
    setFreeAge(fireAge + 1);
  };

  return (
    <div className="App">
      <h1 className="title">Age of Freedom</h1>
      {formOne === false ? (
        ""
      ) : (
        <div className="field">
          <h2>Current Age</h2>
          <input
            onChange={e => setAge(parseInt(e.target.value, 10))}
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
      )}
      {formTwo === false ? (
        ""
      ) : (
        <div className="field">
          <h2>Income</h2>
          <span>annual gross income $</span>
          <input
            onChange={e => setIncome(parseInt(e.target.value, 10))}
            type="text"
            maxLength="8"
          />
          <span>annual raise %</span>
          <input
            onChange={e => setRaise(parseInt(e.target.value, 10))}
            type="text"
            maxLength="2"
          />
          <span>tax filing category</span>
          <select onChange={e => setTaxCat(e.target.value)}>
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
      )}
      {formThree === false ? (
        ""
      ) : (
        <div className="field">
          <h2>Expenses</h2>
          <span>annual expenses $</span>
          <input
            onChange={e => setExpenses(parseInt(e.target.value, 10))}
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
      )}
      {formFour === false ? (
        ""
      ) : (
        <div className="field">
          <h2>Savings</h2>
          <span>current value $</span>
          <input
            onChange={e => setSavingsValue(parseInt(e.target.value, 10))}
            type="text"
            maxLength="8"
          />
          <span>interest rate %</span>
          <input
            onChange={e => setSavingsRate(parseInt(e.target.value, 10))}
            type="text"
            maxLength="2"
          />
          <span>annual contribution $</span>
          <input
            onChange={e => setSavingsCont(parseInt(e.target.value, 10))}
            type="text"
            maxLength="8"
          />
          <div className="nav-buttons">
            <button
              className="previous"
              onClick={() => {
                toggleFormThree(true);
                toggleFormFour(false);
                window.scroll(0, 0);
              }}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={() => {
                toggleFormFour(false);
                toggleFormFive(true);
                window.scroll(0, 0);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {formFive === false ? (
        ""
      ) : (
        <div className="field">
          <h2>Accessable Investments</h2>
          <span>current value $</span>
          <input
            onChange={e => setOtherValue(parseInt(e.target.value, 10))}
            type="text"
            maxLength="8"
          />
          <span>interest rate %</span>
          <input
            onChange={e => setOtherRate(parseInt(e.target.value, 10))}
            type="text"
            maxLength="2"
          />
          <span>annual contribution $</span>
          <input
            onChange={e => setOtherCont(parseInt(e.target.value, 10))}
            type="text"
            maxLength="8"
          />
          <div className="nav-buttons">
            <button
              className="previous"
              onClick={() => {
                toggleFormFour(true);
                toggleFormFive(false);
                window.scroll(0, 0);
              }}
            >
              Previous
            </button>
            <button
              className="calculate"
              onClick={() => {
                calcCompoundIncome();
                calcCompoundExpenses();
                calcInvest();
                calcFire();
                findAge();
                toggleFormFive(false);
                toggleFormSix(true);
                window.scroll(0, 0);
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      )}
      {formSix === false ? (
        ""
      ) : (
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
      )}
    </div>
  );
}

export default App;
