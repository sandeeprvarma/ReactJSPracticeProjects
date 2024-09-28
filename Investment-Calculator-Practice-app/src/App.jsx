import { React, useState } from 'react';
import Header from "./Component/Header";
import UserInput from "./Component/UserInput";
import Results from './Component/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 12,
    duration: 1
  });

  const isValidInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInputValue => {
      return {
        ...prevInputValue,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {isValidInput ? <Results input={userInput} /> : <p className='center'>Please enter a valid value.</p>}
      
    </>
  )
}

export default App
