import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

import "./Countries.css"

export default function Countries() {
    const [data, setData] = useState([])
    const[dataCopy , setDataCopy] = useState([])
    const[countryName , setCountryName] = useState("")

    useEffect(() => {
        axios.get("https://covid-19-tracker-champ.herokuapp.com/cod/Countries").then((res) => {setData(res.data);setDataCopy(res.data) }).catch((err) => console.log(err))
    }, [])

    // console.log("countries", data)
    console.log("name" , countryName)

useEffect(() => {
    countrySearch()

},[countryName])

    function countrySearch() {
        var filterCountry = countryName.length === 0 ? dataCopy : data.filter((e) => e.Country.toLowerCase().includes(countryName.toLowerCase()))
        setData(filterCountry)
    }
console.log("dataaa", data)

    return (
        <div>
            {/* <p>Countries</p> */}
            <input type="text" value={countryName} placeholder="Search By Country" onChange={(e) => setCountryName(e.target.value)} /> <br /><br />

            <div className='CountriesDiv'>
                {
                    data.map((e) => (
                        <div className='IndivCountriesDiv'>
                            <p>{e.Country}</p>
                            <p>Active : {(e.NewConfirmed) - e.NewDeaths - e.NewRecovered}</p>
                            <p>Recover : {e.TotalRecovered}</p>
                            <p>deceased  :{e.TotalDeaths} </p>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}


// Country: "Afghanistan"
// CountryCode: "AF"
// Date: "2022-06-16T15:03:57.62Z"
// ID: "88e66ba8-dc4f-45b2-bded-dfe21e422d89"
// NewConfirmed: 0
// NewDeaths: 0
// NewRecovered: 0
// Premium: {}
// Slug: "afghanistan"
// TotalConfirmed: 181236
// TotalDeaths: 7710
// TotalRecovered: 0