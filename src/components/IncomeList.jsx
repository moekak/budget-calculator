import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'

const IncomeList = ({income, setIncome}) => {

    const DeleteIncome = (id) => {
        setIncome((income)=> 
            income.filter((income) => income.id != id)
        );
    }
    
  return (
    <div className="income">
        {income.map(income => {
            return (
                <div className="list_details">
                    <span>{income.desc}</span>
                    <span>{income.price}</span>
                    <button className='btn-delete' onClick={() => {DeleteIncome(income.id)}}><RiDeleteBinLine/></button>
                </div> 
                 
            )   
        })}
    </div>
  )
}

export default IncomeList