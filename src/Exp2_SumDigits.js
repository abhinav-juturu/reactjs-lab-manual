import React, { useState } from "react";

function Exp2_SumDigits() {
  const [num, setNum] = useState("");
  const [sum, setSum] = useState("");

  const calculate = () => {
    let n = num, s = 0;
    while (n > 0) {
      s += n % 10;
      n = Math.floor(n / 10);
    }
    setSum(s);
  };

  return (
    <div style={boxStyle}>
      <h3>Experiment 2</h3>
      <input onChange={e => setNum(e.target.value)} />
      <br /><br />
      <button style={btnStyle} onClick={calculate}>Sum of Digits</button>
      <p>Result: {sum}</p>
    </div>
  );
}

export default Exp2_SumDigits;

const boxStyle = {
  width: "400px", margin: "40px auto", padding: "20px",
  border: "2px solid #333", borderRadius: "10px",
  textAlign: "center", backgroundColor: "#f0f8ff"
};
const btnStyle = { padding: "8px 15px" };
