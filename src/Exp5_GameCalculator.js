import React, { useState } from "react";

function Exp5_GameCalculator() {
  const [mode, setMode] = useState("calc");

  return (
    <div style={box}>
      <h3>Experiment 5 – Calculator with Game</h3>

      <div style={{ marginBottom: "15px" }}>
        <button style={modeBtn} onClick={() => setMode("calc")}>Calculator</button>
        <button style={modeBtn} onClick={() => setMode("game")}>Game</button>
      </div>

      {mode === "calc" ? <RealCalculator /> : <MathGame />}
    </div>
  );
}

export default Exp5_GameCalculator;

function RealCalculator() {
  const [input, setInput] = useState("");

  const handleClick = (val) => setInput(input + val);

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  return (
    <div style={calcBox}>
      <input style={display} value={input} readOnly />

      <div style={grid}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="].map(btn => (
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


function MathGame() {
  const [a, setA] = useState(rand());
  const [b, setB] = useState(rand());
  const [ans, setAns] = useState("");
  const [msg, setMsg] = useState("");

  function rand() {
    return Math.floor(Math.random() * 10);
  }

  const check = () => {
    if (parseInt(ans) === a + b) {
      setMsg("Correct! Next Question 🎉");
      setA(rand());
      setB(rand());
      setAns("");
    } else {
      setMsg("Please try again ❌");
    }
  };

  return (
    <div>
      <h4>{a} + {b} = ?</h4>
      <input value={ans} onChange={e => setAns(e.target.value)} />
      <br /><br />
      <button style={checkBtn} onClick={check}>Check</button>
      <p>{msg}</p>
    </div>
  );
}


const box = {
  width: "350px",
  margin: "40px auto",
  padding: "20px",
  textAlign: "center",
  border: "2px solid #333",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9"
};

const calcBox = {
  backgroundColor: "#222",
  padding: "15px",
  borderRadius: "10px"
};

const display = {
  width: "100%",
  height: "45px",
  fontSize: "20px",
  textAlign: "right",
  marginBottom: "10px",
  paddingRight: "10px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "8px"
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
  cursor: "pointer"
};

const modeBtn = {
  margin: "5px",
  padding: "8px 15px",
  cursor: "pointer"
};

const checkBtn = {
  padding: "8px 15px",
  cursor: "pointer"
};
