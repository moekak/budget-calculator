import React from 'react'

const IncomeList = ({income, setIncome}) => {

    const DeleteIncome = (id) => {
        setIncome(income.filter((income)=> income.id != id));
    }
    
  return (
    <div className="income-list">
        {income.map(income => {
            return (
                <div className="lists">
                    <span>{income.desc}</span>
                    <span>{income.price}</span>
                    <button onClick={() => {DeleteIncome(income.id)}}>delete</button>
                    
                </div> 
                 
            )   
        })}
    </div>
  )
}

export default IncomeList