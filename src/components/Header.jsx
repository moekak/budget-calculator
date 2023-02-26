import React from 'react'

const Header = ({totalIncome, totalExpenses, foodExpensesTootal}) => {
  
  return (
    <div className="header">
        <div className="total-income">
            <p>Total Income</p>
            <h2 className='total'>${totalIncome}</h2>
        </div>
        <div className="total-expenses">
            <p>Total Expenses</p>
            <h2 className='total'>${totalExpenses}</h2>
        </div>
        <div className="total-expenses">
            <p>Food Expenses</p>
            <h2 className='total'>${foodExpensesTootal}</h2>
        </div>
        <div className="differences">
            <p>Differences</p>
            <h2 className='total'>${totalIncome - totalExpenses}</h2>
        </div>
        
        
        
    </div>
  )
}

export default Header