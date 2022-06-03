import React from "react";

export function Card({ data, details, openMenu, closeMenu, element, buyItem }) {
  return (
    <div>
      <div className="w-full my-12">
        <h1 className="text-3xl mx-48">Seleziona un frutto</h1>
      </div>
      {details === true && data && (
        <div className="fixed top-0 flex justify-center w-screen h-screen bg-gray-400 bg-opacity-50">
          <div className="details-2 mt-32">
            <div className="photo-description">
              <img className="" src={element.image} alt="" />
              <div className="description-container">
                <div className="description-2">{element.name}</div>
                <div className="text-gray-700 text-base description">
                  <p>Carbs: {element.nutritions.carbohydrates} </p>
                  <p>Proteins: {element.nutritions.protein} </p>
                  <p>Fat: {element.nutritions.fat} </p>
                  <p>Sugar: {element.nutritions.sugar} </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row m-8">
              Prezzo <span className="price-value">{element.price}€</span>
            </div>
            <div className="buttons">
              <button className="details-button" onClick={closeMenu}>
                Chiudi
              </button>
              <button
                className="details-button"
                onClick={() => buyItem(element)}
              >
                Acquista
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex align-center justify-center flex-wrap mb-12">
        {data &&
          data.fruits.slice(0, 8).map((element, index) => (
            <div className="mx-20 mb-12" key={index}>
              <div className="w-64 h-full rounded overflow-hidden shadow-lg">
                <img
                  className="h-64 m-auto"
                  src={element.image}
                  alt="fruit-img"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 flex space-x-">
                    <h4>{element.name}</h4>
                    <span className="ml-auto">{element.price}€</span>
                  </div>
                  <div className="text-gray-700 text-base description">
                    <p>Carbohydrates: {element.nutritions.carbohydrates} </p>
                    <p>Proteins: {element.nutritions.protein} </p>
                    <p>Fat: {element.nutritions.fat} </p>
                    <p>Sugar: {element.nutritions.sugar} </p>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-[#F9CF93] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <button className="p-2" onClick={() => openMenu(element)}>
                      Dettagli
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
