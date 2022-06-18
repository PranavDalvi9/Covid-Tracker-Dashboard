import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

import "./Countries.css"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Countries() {
    const [data, setData] = useState([])
    const [dataCopy, setDataCopy] = useState([])
    const [countryName, setCountryName] = useState("")

    useEffect(() => {
        axios.get("https://covid-19-tracker-champ.herokuapp.com/cod/Countries").then((res) => { setData(res.data); setDataCopy(res.data) }).catch((err) => console.log(err))
    }, [])

    // console.log("countries", data)
    // console.log("name" , countryName)

    useEffect(() => {
        countrySearch()

    }, [countryName])

    function countrySearch() {
        var filterCountry = countryName.length === 0 ? dataCopy : data.filter((e) => e.Country.toLowerCase().includes(countryName.toLowerCase()))
        setData(filterCountry)
    }
    // console.log("dataaa", data)

    return (
        <div>
            {/* <p>Countries</p> */}
            <input type="text" value={countryName} placeholder="Search By Country" onChange={(e) => setCountryName(e.target.value)} /> <br /><br />

            {/* <div className='CountriesDiv'>
                {
                    data.map((e) => (
                        <div className='IndivCountriesDiv' key={e.Country}>
                            <p>{e.Country}</p>
                            <p>Active : {(e.NewConfirmed) - e.NewDeaths - e.NewRecovered}</p>
                            <p>Recover : {e.TotalRecovered}</p>
                            <p>deceased  :{e.TotalDeaths} </p>
                        </div>
                    ))
                }
            </div>

            <div className=''>
                <Card sx={{ maxWidth: 290 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Active
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {(data.NewConfirmed) - data.NewDeaths - data.NewRecovered}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressiv
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Number of active cases from COVID-19.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div> */}



            <div className='CountriesDiv'>
                {
                    data.map((e) => (
                        <div className='IndivCountriesDiv' key={e.Country}>
                            <Card className='ContIndividualDiv' sx={{ height: 154 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {e.Country}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Active : {(e.NewConfirmed) - e.NewDeaths - e.NewRecovered}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            Recovered : {e.TotalRecovered}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Deceased : {e.TotalDeaths}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
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