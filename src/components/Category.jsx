import React from 'react'

const Category = (expenses, setExpenses, foodcategory, setFoodcategory) => {
    const categories = ["foods", "clothes", "transportation", "rent"]
    
 
    
  return (
    <div className="category">
        <div className="food-category">
            <h2>Foods</h2>
            {expenses.expenses.map((expense) => {
                return (
                    <div className="container">
                        {expense.text === "foods" ? <div>{expense.price}</div> : ""}
                    </div>   
                )
            })}
        </div>
        <div className="rent-category">
            <h2>Foods</h2>
            {expenses.expenses.map((expense) => {
                return (
                    <div className="container">
                        {expense.text === "rent" ? <div>{expense.price}</div> : ""}
                    </div>   
                )
            })}
        </div>
   
        
        
        
        
        

    </div>
  )
}

export default Category