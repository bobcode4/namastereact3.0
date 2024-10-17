import { useDispatch, useSelector } from "react-redux";
import UserContext from "../utils/userContext";
import { useContext } from "react";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()

    const handleClearCart =() => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">My Cart</h1>
            <h2>User : {loggedInUser}</h2>
            {
                cartItems.length === 0 ? <h1>Your Cart is Empty, Please add items to the Cart!</h1> :
                <button className="text-white text-xs bg-black border rounded-md px-1 m-2"
            onClick={handleClearCart}>
                Clear Cart
            </button>
            }
            
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;