import React, { useState, useEffect } from "react";

export function Card() {
  const fruits = []
  const [data, setData] = useState(fruits);

  useEffect(() => {
      
    fetch(`https://fruits-develhope.herokuapp.com/api`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      { 
        data.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
    </div>
  );
}
