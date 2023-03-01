import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'

const FoodExpensesList = ({expenses, setExpenses}) => {

    const DeleteIncome = (id) => {
        setExpenses(expenses.filter((expenses)=> expenses.id != id ));
      
    }
  return (
    <div className="food-list">
        <h3>Food</h3>
        
        {expenses.map(expenses => {
            return (
                <div className='category_expenses'>
                    <div className="food_category">
                        {expenses.text === "foods" ? 
                        <div className='food-expenses'>
                            <span>{expenses.desc}</span>
                            <span>${expenses.price}</span>
                         
                            <button className='btn-delete' onClick={() => {DeleteIncome(expenses.id)}}><RiDeleteBinLine/></button>
                        </div> : ""}
                    </div>  
                </div> 
                 
            )   
        })}
      
    </div>
  )
}

export default FoodExpensesList