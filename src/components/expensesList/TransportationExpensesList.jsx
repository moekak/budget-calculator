import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'

const TransportationExpensesList = ({expenses, setExpenses}) => {
    const DeleteIncome = (id) => {
        setExpenses(expenses.filter((expenses)=> expenses.id != id ));
      
    }
  return (
    <div className="transportation-list">
        <h3>Transportation</h3>
        
    {expenses.map(expenses => {
        return (
            <div className='category_expenses'>
                <div className="food_category">
                    {expenses.text === "transportation" ? 
                    <div className='transportation-expenses'>
                        <span>{expenses.desc}</span>
                        <span>{expenses.price}</span>
                     
                        <button className='btn-delete' onClick={() => {DeleteIncome(expenses.id)}}><RiDeleteBinLine/></button>
                    </div> : ""}
                </div>  
            </div> 
             
        )   
    })}
  
</div>
  )
}

export default TransportationExpensesList