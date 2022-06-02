import React, { useEffect, useState } from "react";

export const UseCards = () => {
  const [data, setData] = useState();
  const [nutrition, setNutrition] = useState();
  const [details, setDetails] = useState(false);
  const [element, setElement] = useState();
  useEffect(() => {
    fetch(`https://fruits-develhope.herokuapp.com/api`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  const openMenu = function OpenDetails(data) {
    setElement(data);
    console.log(data);
    setDetails(true);
    console.log(details);
  };
  const closeMenu = function CloseDetails() {
    setDetails(false);
  };

  return {
    nutrition,
    data,
    openMenu,
    closeMenu,
    details,
    element,
  };
};
