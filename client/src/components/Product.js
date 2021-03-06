import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='abc' />

      <div className="product__info">
        <p className="info__name">Product Name</p>

        <p className="info__description">Nulla Lorem sint et duis laboris sint ipsum cillum sint nulla pariatur consectetur nostrud. Cupidatat anim mollit pariatur adipisicing tempor id non nulla laboris cupidatat do elit consectetur. Deserunt culpa adipisicing aliquip dolor minim occaecat culpa magna veniam id reprehenderit. Magna veniam deserunt laborum excepteur consectetur quis commodo Lorem aute et anim eu ad excepteur.</p>

        <p className="info__price">$1000</p>

        <Link to={`/product/$1111`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;