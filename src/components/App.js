import { useState } from "react";
import Step from "./Step";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && <Step />}
    </div>
  );
}
