import React from 'react'

const Header = ({totalIncome, totalExpenses, foodExpensesTotal, transportationExpensesTotal, rentExpensesTotal, clothesExpensesTotal}) => {
    const difference = totalIncome - totalExpenses
  return (
    <div className="header">
        <h2>balance</h2>
        <h1 className={difference > 0 ? "positive" : "negative"}>${difference}</h1>
    </div>
  )
}


export default Header