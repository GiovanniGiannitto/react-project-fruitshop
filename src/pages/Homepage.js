import React from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { UseCards } from "../components/UseCards";

export function Homepage() {
  const {
    data,
    details,
    openMenu,
    closeMenu,
    element,
    buyItem,
    cart,
    delItem,
  } = UseCards();
  return (
    <div className="relative">
      <Navbar cart={cart} delClick={delItem} />
      <Card
        data={data}
        details={details}
        openMenu={openMenu}
        closeMenu={closeMenu}
        element={element}
        buyItem={buyItem}
      />
      <Footer />
    </div>
  );
}
