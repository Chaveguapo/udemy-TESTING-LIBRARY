import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";

  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button className={buttonColor} onClick={() => setButtonColor(nextColor)}>
        disabled ={disabled}
        Change to {nextColor}
      </button>
      <br />
      <input
        onChange={() => setDisabled(!disabled)}
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
