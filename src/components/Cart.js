import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("🚀 ~ Cart ~ cartItems:", cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart</h1>
      <button
        className="border px-4 py-1 rounded bg-black text-white"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      <div className="w-6/12 mx-auto">
        {cartItems?.length === 0 && (
          <div className="p-10">Cart is empty , please add item</div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
