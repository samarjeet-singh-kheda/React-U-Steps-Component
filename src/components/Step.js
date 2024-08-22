import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Step() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 && step <= 3 ? "active" : ""}>1</div>
          <div className={step >= 2 && step <= 3 ? "active" : ""}>2</div>
          <div className={step === 3 ? "active" : ""}>3</div>
        </div>

        <StepMessage step={step}>{messages[step - 1]}</StepMessage>

        <div className="buttons">
          <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
            <span>👈</span> Previous
          </Button>

          <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
            Next <span>👉</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Step;
