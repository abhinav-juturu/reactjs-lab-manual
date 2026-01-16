import React, { useState } from "react";

function Exp4_Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div style={calcBox}>
      <h3>Experiment 4 – Calculator</h3>

      <input
        style={display}
        value={input}
        readOnly
      />

      <div style={grid}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="].map((btn) => (
          <button
            key={btn}
            style={btn === "=" ? equalBtn : button}
            onClick={() => btn === "=" ? calculate() : handleClick(btn)}
          >
            {btn}
          </button>
        ))}
        <button style={clearBtn} onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default Exp4_Calculator;

/* ---------- STYLES ---------- */

const calcBox = {
  width: "280px",
  margin: "40px auto",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#222",
  color: "#fff",
  textAlign: "center"
};

const display = {
  width: "100%",
  height: "45px",
  fontSize: "20px",
  marginBottom: "15px",
  textAlign: "right",
  paddingRight: "10px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "10px"
};

const button = {
  padding: "15px",
  fontSize: "16px",
  cursor: "pointer"
};

const equalBtn = {
  gridColumn: "span 2",
  padding: "15px",
  backgroundColor: "orange",
  fontSize: "16px",
  cursor: "pointer"
};

const clearBtn = {
  gridColumn: "span 2",
  padding: "15px",
  backgroundColor: "red",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer"
};
