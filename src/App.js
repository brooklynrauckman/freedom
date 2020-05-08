import React, { useState } from "react";
import "./styles.css";
import Final from "./Final.js";
import CurrentAge from "./CurrentAge.js";
import Income from "./Income.js";
import Expenses from "./Expenses.js";
import Savings from "./Savings.js";
import Investments from "./Investments.js";

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
  const [activeForm, updateActiveForm] = useState(0);
  const [fireValue, setFireValue] = useState(0);

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
      income * ((1 + raise / 100) ^ (fireAge - age)) * (1 - taxBracket) -
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
    setFireValue(25 * expenses);
  };

  return (
    <div className="App">
      {activeForm !== 0 ? (
        ""
      ) : (
        <CurrentAge
          setAge={setAge}
          age={age}
          updateActiveForm={updateActiveForm}
        />
      )}
      {activeForm !== 1 ? (
        ""
      ) : (
        <Income
          setIncome={setIncome}
          income={income}
          setRaise={setRaise}
          raise={raise}
          setTaxCat={setTaxCat}
          taxCat={taxCat}
          updateActiveForm={updateActiveForm}
        />
      )}
      {activeForm !== 2 ? (
        ""
      ) : (
        <Expenses
          setExpenses={setExpenses}
          expenses={expenses}
          updateActiveForm={updateActiveForm}
        />
      )}
      {activeForm !== 3 ? (
        ""
      ) : (
        <Savings
          setSavingsCont={setSavingsCont}
          savingsCont={savingsCont}
          setSavingsRate={setSavingsRate}
          savingsRate={savingsRate}
          setSavingsValue={setSavingsValue}
          savingsValue={savingsValue}
          updateActiveForm={updateActiveForm}
        />
      )}
      {activeForm !== 4 ? (
        ""
      ) : (
        <Investments
          setOtherCont={setOtherCont}
          otherCont={otherCont}
          setOtherRate={setOtherRate}
          otherRate={otherRate}
          setOtherValue={setOtherValue}
          otherValue={otherValue}
          updateActiveForm={updateActiveForm}
          findAge={findAge}
          calcFire={calcFire}
          calcInvest={calcInvest}
          calcCompoundIncome={calcCompoundIncome}
          calcCompoundExpenses={calcCompoundExpenses}
        />
      )}
      {activeForm !== 5 ? (
        ""
      ) : (
        <Final
          freeAge={freeAge}
          fireValue={fireValue}
          updateActiveForm={updateActiveForm}
        />
      )}
    </div>
  );
}

export default App;
