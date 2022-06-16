import React from 'react'
import "./PiechartMain.css"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Active', 'Recovered', 'Deceased'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };




export default function PiechartMain() {
    const [data1, setData1] = useState([])
    useEffect(() => {
      axios.get("http://localhost:2348/cod/Global").then((res) => setData1(res.data)).catch((err) => console.log(err))
    }, [])
console.log("data default" , data1)
  return (
    <div className='PieCircleDiv'>
      <Pie data={data} />
    </div>
  )
}
