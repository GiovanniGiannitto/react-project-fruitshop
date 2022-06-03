import { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import { Logo } from "./Logo";

export const Navbar = ({ cart, delClick }) => {
  const [cartActive, setActiveCart] = useState(false);

  const handleClick = (isActive) => {
    setActiveCart(isActive);
  };
  return (
    <div className="flex justify-between w-full h-[72px] bg-[#DBD0C0]">
      <Link to="/">
        <Logo logoStyle="h-full px-8 py-2" />
      </Link>
      <button
        data-cart-items={cart && cart.length}
        className={cart.length > 0 ? "cart" : "cart-items"}
        onClick={() => handleClick(true)}
      ></button>
      {cartActive && (
        <Cart cartItems={cart} closeBtn={handleClick} deleteItem={delClick} />
      )}
    </div>
  );
};
