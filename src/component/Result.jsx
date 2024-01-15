import React from 'react'
import { calculateInvestmentResults, formatter } from '../utility/investment_calculation'
function Result({userInput}) {
    const newResult = calculateInvestmentResults(userInput);
    const initalInvestment = newResult[0].valueEndOfYear - newResult[0].interest - newResult[0].annualInvestment
    console.log(newResult);
  return (
    <div>
        <table id='result'>
            <thead>
                <tr>
                <th>Year</th>
                <th>Invesment Capital</th>
                <th>Intrest (Year)</th>
                <th>Total Intrest</th>
                </tr>
            </thead>
            <tbody>
        
                {newResult.map((yearData)=>{
                    const totalIntrest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -initalInvestment
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                    </tr>
                })} 
            </tbody>
        </table>
    
    </div>
    )
}

export default Result