import React, { useState } from "react";

function Exp1_NumberPrograms() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const factorial = () => {
    let f = 1;
    for (let i = 1; i <= num; i++) f *= i;
    setResult("Factorial: " + f);
  };

  const fibonacci = () => {
    let a = 0, b = 1, s = "Fibonacci: ";
    for (let i = 0; i < num; i++) {
      s += a + " ";
      [a, b] = [b, a + b];
    }
    setResult(s);
  };

  const primeCheck = () => {
    let p = num > 1;
    for (let i = 2; i < num; i++) if (num % i === 0) p = false;
    setResult(p ? "Prime Number" : "Not a Prime Number");
  };

  return (
    <div style={boxStyle}>
      <h3>Experiment 1</h3>
      <input onChange={e => setNum(e.target.value)} />
      <br /><br />
      <button style={btnStyle} onClick={factorial}>Factorial</button>
      <button style={btnStyle} onClick={fibonacci}>Fibonacci</button>
      <button style={btnStyle} onClick={primeCheck}>Prime</button>
      <p>{result}</p>
    </div>
  );
}

export default Exp1_NumberPrograms;

const boxStyle = {
  width: "400px", margin: "40px auto", padding: "20px",
  border: "2px solid #333", borderRadius: "10px",
  textAlign: "center", backgroundColor: "#f9f9f9"
};
const btnStyle = { margin: "5px", padding: "8px 15px" };
