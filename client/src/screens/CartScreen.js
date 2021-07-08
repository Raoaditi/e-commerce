import './CartScreen.css';
import { Link } from "react-router-dom";
//components
import CartItem from '../components/CartItem';

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
            <h2>Shopping Cart</h2>
                <div>
                    Your Cart Is Empty <Link to="/">Go Back</Link>
                </div>
                <CartItem />
            </div>

            <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal 12 items</p>
            <p>$12345</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
        </div>
    )
}

export default CartScreen
