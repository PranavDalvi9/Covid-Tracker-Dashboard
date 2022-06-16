import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Home.css"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:2348/cod/Global").then((res) => setData(res.data)).catch((err) => console.log(err))
  }, [])

  
  // console.log(data)
  return (
    <div className='HomeMainDiv'>

      <div className='Flex Gap5'>
        <div className=''>
          <Card className='Card1 Active' sx={{ maxWidth: 290 }}>
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
        </div>


        <div>
          <Card className='Card2 Recovered' sx={{ maxWidth: 290 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Recovered
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.TotalRecovered}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This impressiv
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of recoveries from COVID-19.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>


        <div>
          <Card className='Card3 Death' sx={{ maxWidth: 290 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" color="text.secondary" >
                  Deceased
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.TotalDeaths}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This impressiv
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of deaths caused by COVID-19.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
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