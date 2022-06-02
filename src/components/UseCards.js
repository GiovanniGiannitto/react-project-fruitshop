import React, { useEffect, useState } from "react";

export const UseCards = () => {
  const [data, setData] = useState();
  const [nutrition, setNutrition] = useState();
  const [details, setDetails] = useState(false);
  const [element, setElement] = useState();
  const [cart, setCart] = useState([]);
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

  const buyItem = function buyItem() {
    setCart([...cart]);
    console.log(cart);
  };

  return {
    nutrition,
    data,
    openMenu,
    closeMenu,
    details,
    element,
    buyItem,
    cart,
  };
};
