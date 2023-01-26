import React from "react";
import { Products } from "../utils/Products";
import "../styles/home.css";
import { Product } from "../components/ProductItem";

export const Home = ({ addToBasket, basket }) => {
  return (
    <div>
      <div className="products">
        {Products.map((product) => (
          <Product
            key={product.id}
            data={product}
            onClick={() => addToBasket(product)}
            basket={basket}
            title={
              basket.includes(product) ? "Уже в корзине" : "Добавить в корзину"
            }
            buttonDisabled={basket.includes(product)}
          />
        ))}
      </div>
    </div>
  );
};
