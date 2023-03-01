import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'

const ClothesExpensesList = ({expenses, setExpenses}) => {
    
    const DeleteIncome = (id) => {
        setExpenses(expenses.filter((expenses)=> expenses.id != id ));
      
    }
  return (
    <div className="clothes-list">
        <h3>Clothes</h3>
        
    {expenses.map(expenses => {
        return (
            <div className='category_expenses'>
                <div className="clothes_category">
                    {expenses.text === "clothes" ? 
                    <div className='clothes-expenses'>
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

export default ClothesExpensesList