import React, {useRef} from 'react'

const ExpensesForm = ({expenses, setExpenses}) => {
    const desc = useRef(null);
    const price = useRef(null);

    const AddExpenses = (e) =>{
        e.preventDefault();

        setExpenses(
            [
                ...expenses,
                {
                    "desc": desc.current.value,
                    "price": price.current.value,
                    id: expenses.length
                }
            ]

        )
        desc.current.value= null
        price.current.value = null;
    

    }

  return (
    <div className="expenses-form">
        <form className='input-form' onSubmit={AddExpenses}>
            <h2>Expenses</h2>
            <div className="name">
                <input className='input' type="text" id="desc" placeholder='Add your item...' ref={desc} />
                <input className='input' type="text" id='price' name='price' placeholder='Add your price...' ref={price} />
                <button className='btn' onClick={AddExpenses}>Add your expenses</button>
            </div>
            
        </form>
    </div>
  )
}

export default ExpensesForm