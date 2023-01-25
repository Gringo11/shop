import React from "react";
import { Product } from "../components/ProductItem";

export const Basket = ({ basket, deleteFromBasket }) => {
  return (
    <div>
      <div className="products">
        {basket.map((product) => (
          <Product
            data={product}
            onClick={() => deleteFromBasket(product.id)}
            title={"Удалить из корзины"}
          />
        ))}
      </div>
    </div>
  );
};
