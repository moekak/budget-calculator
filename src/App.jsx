/* eslint-disable import/first */
import Chart from './components/Chart';
import React, { useState, useEffect } from 'react';
import './App.css';
import ExpensesForm from './components/ExpensesForm';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import Summary from './components/Summary';
import ChartIncome from './components/ChartIncome';
import FoodExpensesList from './components/expensesList/FoodExpensesList';
import RentExpensesList from './components/expensesList/RentExpensesList';
import TransportationExpensesList from './components/expensesList/TransportationExpensesList';
import ClothesExpensesList from './components/expensesList/ClothesExpensesList';


const App = () => {
    const [income, setIncome] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0)
    const [expenses, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [difference, setDifference] = useState(0)
    const [foodExpensesTotal, setFoodExpensesTotal] = useState(0)
    const [rentExpensesTotal, setRentExpensesTotal] = useState(0)
    const [clothesExpensesTotal, setClothesExpensesTotal] = useState(0)
    const [transportationExpensesTotal, setTransportationExpensesTotal] = useState(0)
    const categories = ["foods", "clothes", "transportation", "rent"];
 

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
    
// ============= TOTAL COST OF FOOD CATEGORY =========================
    useEffect(() => {
        let initialValue = 0;
        const foodCategory = expenses.filter((expense) => {
            return expense.text === 'foods';
        })
        // console.log(foodCategory.length);
        for (let i =0; i < foodCategory.length; i++){
            initialValue = initialValue + parseInt(foodCategory[i].price);
        }
        setFoodExpensesTotal(initialValue);
    },[expenses]);

    // ============TOTAL COST OF TRANSPORTATION CATEGORY===================
    useEffect(() => {
        
        let initialValue = 0;
        const transportationCategory = expenses.filter((expense) => {
            return expense.text === 'transportation';
        })
        // console.log(transportationCategory.length);
        for (let i =0; i < transportationCategory.length; i++){
            initialValue = initialValue + parseInt(transportationCategory[i].price);
        }
        setTransportationExpensesTotal(initialValue);
        
    },[expenses]);

    // ============TOTAL COST OF RENT CATEGORY===================
    useEffect(() => {
        
        let initialValue = 0;
        const rentCategory = expenses.filter((expense) => {
            return expense.text === 'rent';
        })
        // console.log(transportationCategory.length);
        for (let i =0; i < rentCategory.length; i++){
            initialValue = initialValue + parseInt(rentCategory[i].price);
        }
        setRentExpensesTotal(initialValue);
        
    },[expenses]);

    // ============TOTAL COST OF CLOTHES CATEGORY===================
    useEffect(() => {
        
        let initialValue = 0;
        const clothesCategory = expenses.filter((expense) => {
            return expense.text === 'clothes';
        })
        // console.log(transportationCategory.length);
        for (let i =0; i < clothesCategory.length; i++){
            initialValue = initialValue + parseInt(clothesCategory[i].price);
        }
        setClothesExpensesTotal(initialValue);
        
    },[expenses]);



  return (
    <div className="main">
        <h1>Budget calculator</h1>
        <Header totalIncome={totalIncome} setTotalIncome={setTotalIncome} totalExpenses={totalExpenses} />
        <div className="total_charts">
            <Chart foodExpensesTotal={foodExpensesTotal} categories={categories} transportationExpensesTotal={transportationExpensesTotal} rentExpensesTotal={rentExpensesTotal} clothesExpensesTotal={clothesExpensesTotal} totalExpenses={totalExpenses}/>
            <ChartIncome totalIncome={totalIncome}/>
        </div>
        <div className="summary_list">
            <Summary foodExpensesTotal={foodExpensesTotal} categories={categories} transportationExpensesTotal={transportationExpensesTotal} rentExpensesTotal={rentExpensesTotal} clothesExpensesTotal={clothesExpensesTotal}/>
        </div>
        
       
            <div className="form">
                <IncomeForm income={income} setIncome={setIncome}/>
                <ExpensesForm expenses={expenses} setExpenses={setExpenses}/>
            </div>
            {/* <div className="lists">

                <IncomeList  income={income} setIncome={setIncome} />
            </div> */}
            <h2 className='expenses_title'>Expenses for categories</h2>
            <div className="expenses_list">
                <FoodExpensesList expenses={expenses} setExpenses={setExpenses}/>
                <RentExpensesList expenses={expenses} setExpenses={setExpenses}/>
                <TransportationExpensesList expenses={expenses} setExpenses={setExpenses}/>
                <ClothesExpensesList expenses={expenses} setExpenses={setExpenses}/>
            </div>
    </div>
  )
}

export default App