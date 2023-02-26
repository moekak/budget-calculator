import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'

const ExpensesList = ({expenses, setExpenses}) => {
    
    const DeleteIncome = (id) => {
        setExpenses(expenses.filter((expenses)=> expenses.id != id ));
      
    }

    
  return (
    <div className="income-list">
        
        {expenses.map(expenses => {
            return (
                <div className="expenses">
                    <span>{expenses.desc}</span>
                    <span>{expenses.price}</span>
                    <span>{expenses.text}</span>
                    <button className='btn-delete' onClick={() => {DeleteIncome(expenses.id)}}><RiDeleteBinLine/></button>
                </div> 
                 
            )   
        })}
      
    </div>
  )
}

export default ExpensesList