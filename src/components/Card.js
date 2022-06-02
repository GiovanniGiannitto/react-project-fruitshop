import React from "react";
import { useFetch } from "../App";
export function Card() {
  const { data, details, openMenu, closeMenu } = useFetch();

  return (
    <div className="container">
      {details === true && data && (
        <div className="details-2">
          <div className="photo-description">
            <img src={data.fruits.image} alt="" />
            <div className="description-2"></div>
          </div>

          <div>{data.price}</div>
          <div>
            <button onClick={closeMenu}>Chiudi</button>
            <button>Acquista</button>
          </div>
        </div>
      )}
      {data &&
        data.fruits.slice(0, 8).map((element, index) => (
          <div className="card  " key={index}>
            <div className=" max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className=" photoSize img-fruit w-full"
                src={element.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex space-x-">
                  <h4> {element.name} </h4> <h4>{element.price}€</h4>
                </div>
                <div className="text-gray-700 text-base description">
                  <p>Carbohydrates: {element.nutritions.carbohydrates} </p>
                  <p>Proteins: {element.nutritions.protein} </p>
                  <p>Fat: {element.nutritions.fat} </p>
                  <p>Sugar: {element.nutritions.sugar} </p>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <button onClick={openMenu}>Dettagli</button>
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
