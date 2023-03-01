import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from "chart.js";
  import { Doughnut } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );


const Chart = ({foodExpensesTotal, transportationExpensesTotal, rentExpensesTotal, clothesExpensesTotal, totalExpenses}) => {
    const labels = [ 
      ]
      const data = {
        labels: ['foods', 'transportation', 'rent', 'clothes'],
        datasets: [
          {
            data: [foodExpensesTotal, transportationExpensesTotal, rentExpensesTotal, clothesExpensesTotal],
            backgroundColor: ['#0000FF','#ca2c92', '#ff7f11', '#FF0000' ]
          },
        ],
      }
  return (
    <div>
      <div className="income_total">
            <h2>Expenses</h2>
            <h2 className='expenses_total'>${totalExpenses}</h2>
        </div>
        <Doughnut data={data}/>
    </div>
  )
}

export default Chart