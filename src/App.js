
import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import UserInput from './component/UserInput';
import Result from './component/Result';

function App() {
  const [userInput, setInput] = useState({
    initialInvestment: 111,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const userInputIsValid = userInput.duration>=1;
  function handeInput(identifier, newValue) {
    setInput((previous) => ({
      ...previous,
      [identifier]: +newValue,
    }));
  }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} handeInput={handeInput}/>
    {userInputIsValid?<Result userInput={userInput}/>:<p className='center'>Duration shoul be greater or equal to 1</p>}
    </>
  );
}

export default App;
