
import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import UserInput from './component/UserInput';
import Result from './component/Result';

function App() {
  const [userInput, setInput] = useState({
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: '',
  });

  const [result,setResult] = useState(userInput);


  function calculate(){
    setResult(userInput);
  }
  
  const userInputIsValid = userInput.duration>=1 && userInput.initialInvestment!==undefined;


  function handeInput(identifier, newValue) {
    setInput((previous) => ({
      ...previous,
      [identifier]: +newValue,
    }));
  }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} handeInput={handeInput} calculate={calculate}/>
    
    {userInputIsValid?<Result result={result}/>:<p className='center'>Duration should be greater or equal to 1</p>}
    </>
  );
}

export default App;
