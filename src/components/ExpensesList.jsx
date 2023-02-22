import React from 'react'

const ExpensesList = ({expenses, setExpenses}) => {
    const DeleteExpenses = (id) =>{
        setExpenses(expenses.map((expense) => expense.id != id))
    }
  return (
    <div className="expenses-list">
        {expenses.map((expense) => {
            return (
                <div className="expense">
                    <span>{expense.desc}</span>
                    <span>{expense.price}</span>
                    <button onClick={()=> {DeleteExpenses(expenses.id)}}>delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default ExpensesList