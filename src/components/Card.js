import React, { useState, useEffect } from "react";

export function Card() {
  const [data, setData] = useState();

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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {data &&
        data.fruits.map((element, index) => (
          <li key={index}>{element.name}</li>
        ))}
    </div>
  );
}
