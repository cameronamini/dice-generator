import React, { useState } from "react";
import Die from "./Die";
import "./styles.css";

export default function App() {
  const [diceQ, setDiceQ] = useState<number | null>(0);
  const [numberInput, setNumberInput] = useState<number | null>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(Number(event.currentTarget.value));
  };

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDiceQ(numberInput);
  }

  const arr = Array(diceQ).fill(0);

  const render = arr.map((el, i) => <Die />);

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>Number of dice: </label>
        <input id="numberInput" type="number" onChange={changeHandler} />
        <button type="submit">Roll</button>
      </form>
      <div className="container"> {render}</div>
    </div>
  );
}
