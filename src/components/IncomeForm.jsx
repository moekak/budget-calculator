import React, {useRef} from 'react'

const IncomeForm = ({income, setIncome}) => {
    const desc = useRef(null);
    const price = useRef(null);


    const AddIncome = (e) =>{
        e.preventDefault();
        if (income.desc === "" && income.price === ""){
            return;
        }
            setIncome(
                [
                    ...income,
                    {
                        "desc": desc.current.value,
                        "price": price.current.value,
                        id: income.length
                    }
                ]
            )
            desc.current.value= null
            price.current.value = null;
        }
    
  return (
    <div className="income-form">
        <form className='input-form' onSubmit={AddIncome}>
            <h2>Income</h2>
            <div className="name">
                <input className='input' type="text" id="desc" name='desc' placeholder='Add your item...' ref={desc} />
                <input className='input' type="text" id='price' name='price' placeholder='Add your price...' ref={price} />
                <button className='btn' onClick={AddIncome}>Add your income</button>
            </div>
            
        </form>

        
    </div>
  )
}

export default IncomeForm