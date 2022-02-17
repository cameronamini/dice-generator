import React, { useState, useEffect } from "react";
import Dot from "./Dot";

const Die = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const randN = Math.floor(Math.random() * 6 + 1);
    setNumber(randN);
  }, []);

  const render = Array(number)
    .fill(0)
    .map((el, i) => <Dot key={i} />);

  return <div className="die">{render}</div>;
};

export default Die;
