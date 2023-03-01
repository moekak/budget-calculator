import React from 'react'

const Summary = ({foodExpensesTotal, categories, transportationExpensesTotal, rentExpensesTotal, clothesExpensesTotal}) => {
  return (
    <div className="summary">
        <h2>Total Expenses</h2>
        <div className="total">
            <div className="food container">
                <h5>Foods</h5>
                <h2>${foodExpensesTotal}</h2>
            </div>
            <div className="transportation container">
                <h5>Transportation</h5>
                <h2>${transportationExpensesTotal}</h2>
            </div>
            <div className="rent container">
                <h5>Rent</h5>
                <h2>${rentExpensesTotal}</h2>
            </div>
            <div className="clothes container">
                <h5>Clothes</h5>
                <h2>${clothesExpensesTotal}</h2>
            </div>
        </div>
    </div>
  )　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
}

export default Summary