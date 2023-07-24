import "./Form.css";
import { useState } from "react";

export const Form = (props) => {
  const initialInput = {
    "current-savings": "",
    "yearly-contribution": "",
    duration: "",
    "expected-return": "",
  };

  const [userInput, setUserInput] = useState(initialInput);

  const handleReset = () => {
    setUserInput(initialInput);
  };

  // Handle input change and update form state
  const handleFormChange = (input, value) => {
    console.log("form changing", input, value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    console.log("Calculating Inputs");
    event.preventDefault();
    // You can submit the form values to your backend or perform any other actions here
    console.log(userInput);

    props.onCalculate(userInput);
  };

  return (
    <div>
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              name="current-savings"
              value={userInput["current-savings"]}
              onChange={(event) =>
                handleFormChange("current-savings", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              name="yearly-contribution"
              id="yearly-contribution"
              value={userInput["yearly-contribution"]}
              onChange={(event) =>
                handleFormChange("yearly-contribution", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              name="expected-return"
              id="expected-return"
              value={userInput["expected-return"]}
              onChange={(event) =>
                handleFormChange("expected-return", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={userInput["duration"]}
              onChange={(event) =>
                handleFormChange("duration", event.target.value)
              }
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="button" onClick={handleSubmit}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};
