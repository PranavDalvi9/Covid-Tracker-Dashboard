import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./IndividualCountries.css"

export default function IndividualCountries() {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [countryName, setCountryName] = useState("")
    const[india , setIndia] = useState([])

    useEffect(() => {
        getData()
        indiaSearch()
    },[])

    useEffect(() => {
        countrySearch()
    }, [countryName])

    // console.log(data)
    function getData() {
        axios.get("http://localhost:2348/cod/Countries").then((res) => { setData(res.data); setData2(res.data)}).catch((err) => console.log(err))
    }

    function countrySearch() {
        var filterCountry = countryName.length === 0 ? data2 : data.filter((e) => e.Country.toLowerCase().includes(countryName.toLowerCase()))
        setData(filterCountry)
    }

    function indiaSearch(){
        console.log("insi",data)
        var filterIndia = data.filter((e) => e.Country == "india")
        setIndia(filterIndia)
        console.log("india" , filterIndia)
    }
  
    return (
        <div>
            <p>Search</p>
            <input type="text" name="" id="" value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder='Name' />

            {/* {
                data.map((e) => (
                    <p>{e.Country}</p>
                ))
            } */}


            <p>{india ? <>
      yes
            
            
            </> : <>No Data Found</>}</p>


        </div>
    )
}
