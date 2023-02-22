import React, { useState, useEffect } from 'react'
import './App.css';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';

const App = () => {
    const [income, setIncome] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0)
    const [expenses, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [difference, setDifference] = useState(0)

    useEffect(() => {
        let initialValue = 0;
        for (let i =0; i < income.length; i++){
            initialValue = initialValue + parseInt(income[i].price);
        }
        setTotalIncome(initialValue);

    },[income]);

    useEffect(() => {
        let initialValue = 0;
        for (let i =0; i < expenses.length; i++){
            initialValue = initialValue + parseInt(expenses[i].price);
        }
        setTotalExpenses(initialValue);

    },[expenses]);

    
    
  return (
    <div className="main">
        <h1>Budget calculator</h1>
        <IncomeForm income={income} setIncome={setIncome}/>
        <ExpensesForm expenses={expenses} setExpenses={setExpenses}/>
        <Header totalIncome={totalIncome} setTotalIncome={setTotalIncome} totalExpenses={totalExpenses}/>
        <IncomeList className='income_list' income={income} setIncome={setIncome} />
        <div className="expense_list">
           <ExpensesList expenses={expenses} setExpenses={setExpenses}/> 
        </div>
       
    </div>
  )
}

export default App