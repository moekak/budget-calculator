
import React, { useState, useEffect } from 'react';
import './App.css';
import Category from './components/Category';
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
    const [foodExpensesTootal, setFoodExpensesTotal] = useState(0)
 

    useEffect(() => {
        let initialValue = 0;
        for (let i =0; i < income.length; i++){
            initialValue = initialValue + parseInt(income[i].price);
        }
        setTotalIncome(initialValue);

    },[income]);

    useEffect(() => {
        // console.log(expenses.length);
        let initialValue = 0;
        for (let i =0; i < expenses.length; i++){
            initialValue = initialValue + parseInt(expenses[i].price);
        }
        setTotalExpenses(initialValue);
        // console.log(totalExpenses);

    },[expenses]);

    useEffect(() => {
        
        let initialValue = 0;
        const foodCategory = expenses.filter((expense) => {
            return expense.text === 'foods';
        })
        console.log(foodCategory.length);
        for (let i =0; i < foodCategory.length; i++){
            initialValue = initialValue + parseInt(foodCategory[i].price);
        }
        setFoodExpensesTotal(initialValue);
        
    },[expenses]);



  return (
    <div className="main">
        <h1>Budget calculator</h1>
        <div className="main__container">
            <div className="form">
                <IncomeForm income={income} setIncome={setIncome}/>
                <ExpensesForm expenses={expenses} setExpenses={setExpenses}/>
            </div>
            <div className="lists">
                <h2>Income</h2>
                <IncomeList  income={income} setIncome={setIncome} />
                <h2>Expenses</h2>
                <ExpensesList expenses={expenses} setExpenses={setExpenses}/>
            </div>
        </div>

        <Header totalIncome={totalIncome} setTotalIncome={setTotalIncome} totalExpenses={totalExpenses} foodExpensesTootal={foodExpensesTootal} />
        <Category expenses={expenses} setExpenses={setExpenses} />
        
        
       
       
    </div>
  )
}

export default App