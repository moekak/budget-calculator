import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'

const RentExpensesList = ({expenses, setExpenses}) => {

    const DeleteIncome = (id) => {
        setExpenses(expenses.filter((expenses)=> expenses.id != id ));
      
    }
  return (
    <div className="rent-list">
        <h3>Rent</h3>
        
        {expenses.map(expenses => {
            return (
                <div className='category_expenses'>
                    <div className="food_category">
                        {expenses.text === "rent" ? 
                        <div className='rent-expenses'>
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

export default RentExpensesList