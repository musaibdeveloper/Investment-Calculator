import React, { useState } from "react"
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestments: 1000,
    annualInvestments: 1200,
    expectedReturn: 6,
    duration: 10

  })

  const InputIsValid = userInput.duration >= 1;

  function HandleChange(InputIdentifier, newValue) {

    setUserInput(preUserInput => {
      return {
        ...preUserInput, [InputIdentifier]: +newValue,
      };
    });

  }

  return (
    <div>
      <Header></Header>
      <UserInput userInput={userInput} onChange={HandleChange}></UserInput>
      {!InputIsValid && <p className="center">Please enter duration number greater than 0</p>}
      {InputIsValid && < Results input={userInput} />}

    </div>

  );


}

export default App
