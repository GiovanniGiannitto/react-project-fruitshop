import React from "react";
import { useFetch } from "../App";

export function Details() {
  const { data, details, openMenu, closeMenu } = useFetch();
  return (
    <div className="details-2">
      <div className="photo-description">
        <img alt="" />
        <div className="description-2"></div>
      </div>

      <div></div>
      <div>
        <button onClick={closeMenu}>Chiudi</button>
        <button>Acquista</button>
      </div>
    </div>
  );
}
