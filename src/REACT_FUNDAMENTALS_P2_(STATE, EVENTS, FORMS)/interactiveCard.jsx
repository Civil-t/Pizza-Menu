import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function InteractiveCard() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function Previous() {
    setStep(step - 1);
  }

  function Next() {
    setStep(step + 1);
  }

  function Close() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={Close}>
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button onClick={Previous}>Previous</button>
            <button onClick={Next}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
