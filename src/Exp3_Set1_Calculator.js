import React, { useState } from "react";

function Exp3_Set1_Calculator() {
  const [num, setNum] = useState("");
  const [res, setRes] = useState("");

  const expression = () => {
    let a = parseInt(num);
    let b = a - 15;
    setRes(((a + b) / (a - b)) * (a + b));
  };

  const sumSquare = () => {
    let n = num, s = 0;
    while (n > 0) {
      let d = n % 10;
      s += d * d;
      n = Math.floor(n / 10);
    }
    setRes(s);
  };

  const evenOdd = () => {
    setRes(num % 2 === 0 ? "Even" : "Odd");
  };

  return (
    <div style={boxStyle}>
      <h3>Experiment 3 – SET 1</h3>
      <input onChange={e => setNum(e.target.value)} />
      <br /><br />
      <button style={btnStyle} onClick={expression}>Evaluate Expression</button>
      <button style={btnStyle} onClick={sumSquare}>MoD Sum Square</button>
      <button style={btnStyle} onClick={evenOdd}>Even / Odd</button>
      <p>Result: {res}</p>
    </div>
  );
}

export default Exp3_Set1_Calculator;

const boxStyle = {
  width: "420px", margin: "40px auto", padding: "20px",
  border: "2px solid #000", borderRadius: "10px",
  textAlign: "center", backgroundColor: "#fff7e6"
};
const btnStyle = { margin: "5px", padding: "8px 15px" };
