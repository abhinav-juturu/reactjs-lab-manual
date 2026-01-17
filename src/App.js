import { useState } from "react";

import Exp1_NumberPrograms from "./Exp1_NumberPrograms";
import Exp2_SumDigits from "./Exp2_SumDigits";
import Exp3_Set1_Calculator from "./Exp3_Set1_Calculator";
import Exp4_Calculator from "./Exp4_Calculator";
import Exp5_GameCalculator from "./Exp5_GameCalculator";

function App() {
  const [exp, setExp] = useState(1);

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>ReactJS Lab Manual</h1>
      <p style={subTitleStyle}>Full Stack Frameworks – Semester VI</p>

      {/* Experiment Buttons */}
      <div style={buttonGroup}>
        <button style={btn} onClick={() => setExp(1)}>
          Experiment 1<br />Number Programs
        </button>

        <button style={btn} onClick={() => setExp(2)}>
          Experiment 2<br />Sum of Digits
        </button>

        <button style={btn} onClick={() => setExp(3)}>
          Experiment 3 (SET–1)<br />Calculator & Logic
        </button>

        <button style={btn} onClick={() => setExp(4)}>
          Experiment 4<br />Real-Time Calculator
        </button>

        <button style={btn} onClick={() => setExp(5)}>
          Experiment 5<br />Calculator with Game
        </button>
      </div>

      {/* Experiment Output Area */}
      <div style={outputBox}>
        {exp === 1 && <Exp1_NumberPrograms />}
        {exp === 2 && <Exp2_SumDigits />}
        {exp === 3 && <Exp3_Set1_Calculator />}
        {exp === 4 && <Exp4_Calculator />}
        {exp === 5 && <Exp5_GameCalculator />}
      </div>
    </div>
  );
}

export default App;

/* ================= STYLES ================= */

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#eef2f7",
  padding: "20px",
  textAlign: "center",
  fontFamily: "Arial, sans-serif"
};

const titleStyle = {
  marginBottom: "5px",
  color: "#222"
};

const subTitleStyle = {
  marginBottom: "25px",
  color: "#555"
};

const buttonGroup = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "30px"
};

const btn = {
  width: "220px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  cursor: "pointer",
  backgroundColor: "#ffffff",
  fontSize: "14px",
  fontWeight: "bold"
};

const outputBox = {
  marginTop: "20px"
};
