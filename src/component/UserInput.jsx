import React from "react";

function UserInput({userInput,handeInput}) {
  

  return (
    <section id="user-input">
      <div className="input-group">
      <p>
      <label>INITIAL INVESTMENT</label>
      <input
        type="number"
        required
        value={userInput.initalInvestment}
        onChange={(event) => {
          handeInput("initialInvestment", event.target.value);
        }}
      />

      <label>ANNUAL INVESTMENT</label>
      <input
        type="number"
        required
        value={userInput.annualInvestment}
        onChange={(event) => {
          handeInput("annualInvestment", event.target.value);
        }}
      />
      </p>

      <p>
      <label>EXPECTED RETURN</label>
      <input
        type="number"
        required
        value={userInput.expectedReturn}
        onChange={(event) => {
          handeInput("expectedReturn", event.target.value);
        }}
      />

      <label>DURATION</label>
      <input
        type="number"
        required
        value={userInput.duration}
        onChange={(event) => {
          handeInput("duration", event.target.value);
        }}
      />
      </p>
      </div>
      {console.log(userInput)}
    </section>
  );
}

export default UserInput;
