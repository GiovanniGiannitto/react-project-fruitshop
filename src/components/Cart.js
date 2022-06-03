import del from "../assets/Rectangle 29.png";

export const Cart = ({ cartItems, closeBtn, deleteItem }) => {
  return (
    <div className="fixed w-full h-screen bg-gray-400 bg-opacity-50">
      <div className="flex mt-32 justify-center w-full h-full">
        <div className="w-[40rem] h-64 relative bg-white border border-1 border-[#f9cf93]">
          <h1 className="p-6">Carrello</h1>
          <div className="border-y border-1 border-black h-20 overflow-auto">
            {cartItems &&
              cartItems.map((value, index) => (
                <div className="flex w-full h-full justify-between" key={index}>
                  <div className="w-1/6 flex">
                    <img src={value.image} alt="fruit" />
                    <span className="my-auto ml-12">{value.name}</span>
                    <span className="my-auto ml-12">{value.price}€</span>
                  </div>
                  <div className="flex flex-row h-full">
                    <img
                      onClick={() => deleteItem(index)}
                      className="h-1/2 my-auto cursor-pointer"
                      src={del}
                      alt="trashimg"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex justify-center m-6">
              <button
                className="px-16 py-1 rounded-lg bg-[#ffefa0]"
                onClick={() => closeBtn(false)}
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
