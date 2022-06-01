import React, { useEffect, useState } from 'react'

export const UseCards = () => {
    const [data,setData]=useState();
    const [nutrition,setNutrition]=useState();
 useEffect(()=>{
     fetch(`https://fruits-develhope.herokuapp.com/api`)
     .then(response=>{
        return response.json()
     })
     .then(json=>{
         setData(json)
     })
     
 },[])

  return {
    nutrition,
      data,
  }
}
