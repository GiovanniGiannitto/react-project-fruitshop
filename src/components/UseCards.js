import { useEffect, useState } from "react";

export const UseCards = () => {
  const [data, setData] = useState();
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
    setDetails(true);
  };
  const closeMenu = function CloseDetails() {
    setDetails(false);
  };

  const buyItem = (fruit) => {
    setCart((state) => [...state, fruit]);
  };

  const delItem = (id) => {
    setCart((state) => state.filter((value, index) => index !== id));
  };

  return {
    data,
    openMenu,
    closeMenu,
    details,
    element,
    buyItem,
    cart,
    delItem,
  };
};
