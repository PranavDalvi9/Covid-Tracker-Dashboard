import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

export default function Home() {

    const[data , setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:2348/cod/Global").then((res) => setData(res.data)).catch((err) => console.log(err))
    },[])
    // console.log(data)
  return (
    <div>
      <div>
        <p>Active : {(data.NewConfirmed) - data.NewDeaths - data.NewRecovered}</p>
        <p>Recover : {data.TotalRecovered}</p>
        <p>Decrease : </p>
      </div>
    </div>
  )
}
// Date: "2022-06-16T15:03:57.62Z"
// NewConfirmed: 493827
// NewDeaths: 1430
// NewRecovered: 0
// TotalConfirmed: 536000177
// TotalDeaths: 6309179
// TotalRecovered: 0