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


const ChartIncome = ({totalIncome}) => {
  
    const labels = [ 
    ]
    const data = {
      labels: ["income"],
      datasets: [
        {
          data: [totalIncome],
          backgroundColor: ['#0000FF','#ca2c92', '#ff7f11', '#FF0000' ]
        },
      ],
    }
  return (
    <div>
        <div className="income_total">
            <h2>Income</h2>
            <h2 className='income'>${totalIncome}</h2>
        </div>
        
         <Doughnut data={data}/>
    </div>
  )
}

export default ChartIncome