import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../App";

export function Homepage() {
  function useFetch() {
    const [data, setData] = useState();
    const [details, setDetails] = useState(false);

    const openMenu = function OpenDetails() {
      setDetails(true);
      console.log(details);
    };
    const closeMenu = function CloseDetails() {
      setDetails(false);
    };

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

    return {
      data,
      details,
      openMenu,
      closeMenu,
    };
  }

  return (
    <div className="homepage">
      <div className="cards">
        {data.fruits &&
          data.fruits.map((element, index) => (
            <li key={index}>
              <Card name={element.name} />
            </li>
          ))}
      </div>
    </div>
  );
}
