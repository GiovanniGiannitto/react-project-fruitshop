import "./App.css";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";
import { UseCards } from "./components/UseCards";

// export function useFetch() {
//   const [data, setData] = useState();
//   const [details, setDetails] = useState(false);
  

//   const openMenu = function OpenDetails(data) {
//     setDetails(true);
//     console.log(details);
//   };
//   const closeMenu = function CloseDetails() {
//     setDetails(false);
//   };

//   useEffect(() => {
//     fetch(`https://fruits-develhope.herokuapp.com/api`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         setData(json);
//         console.log(json);
//       });
//   }, []);

//   return {
//     data,
//     details,
//     openMenu,
//     closeMenu,
//   };
// }

function App() {
  const {data} = UseCards()
  return (
    <div className="App">
      <Card
      data={data} 
      />
    </div>
  );
}

export default App;
