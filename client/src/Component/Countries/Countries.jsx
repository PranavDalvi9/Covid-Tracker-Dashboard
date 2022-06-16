import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

export default function Countries() {
    const[data, setData] = useState([])

     useEffect(() => {
        axios.get("http://localhost:2348/cod/Countries").then((res) => setData(res.data)).catch((err) => console.log(err))
    },[])

    console.log("countries" , data)
  return (
    <div>
      <p>Countries</p>
    </div>
  )
}
