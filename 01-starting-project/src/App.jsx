import Header from "./components/Header.jsx"
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isInputValid && <Results input={userInput} />}
    </>
  )
}

export default App
