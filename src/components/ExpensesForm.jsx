import React, {useRef, useState} from 'react'


const ExpensesForm = ({expenses, setExpenses}) => {
    const categories = ["foods", "clothes", "transportation", "rent" ]
    const [category, setCategory] = useState('')
    const desc = useRef(null);
    const price = useRef(null);
    const text = category
  
    



    // function
    // const handleSubmit = (e) => {
    //     console.log(e.target.value);
        

    // }
    const handleSubmit = (e) => {
        setCategory(e.target.value);
        
    }
    const AddExpenses = (e) =>{
        e.preventDefault();
   
       
        if (desc.current.value === '' && price.current.value === ''){
            return;
        }  else {
            setExpenses(
                [
                    ...expenses,
                    {
                        "desc": desc.current.value,
                        "price": price.current.value,
                        id: expenses.length,
                        "text": category
                    }
                ]
            )
            desc.current.value= null
            price.current.value = null;
        }
    

    }

  return (
    <div className="expenses-form">
        <form className='input-form' onSubmit={AddExpenses}>
            <h2>Expenses</h2>
            <div className="name">
                <input className='input' type="text" id="desc" placeholder='Add your item...' ref={desc} />
                <input className='input' type="text" id='price' name='price' placeholder='Add your price...' ref={price} />
                <select value={category} onChange={handleSubmit}>
                    {categories.map((category) => {
                        return(
                            <option key={category} name={category}>{category}</option>
                        )
                    })}
                </select>
                <button className='btn' onClick={AddExpenses}>Add your expenses</button>
            </div>
            <span>{category}</span>
            
        </form>
    </div>
  )
}

export default ExpensesForm