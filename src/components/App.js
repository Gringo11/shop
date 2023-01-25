import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Basket } from "../pages/Basket";
import { Home } from "../pages/Home";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);
  const addToBasket = (product) => {
    setBasket([...basket, product]);
    setBasketTotal(basketTotal + 1);
  };
  const deleteFromBasket = (id) => {
    setBasketTotal(basketTotal - 1);
    const newArr = basket.filter((item) => item.id !== id);
    setBasket(newArr);
  };
  return (
    <>
      <Router>
        <Navbar basketTotal={basketTotal} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToBasket={addToBasket}
                basket={basket}
                deleteFromBasket={deleteFromBasket}
              />
            }
          />
          <Route
            path="/Basket"
            element={
              <Basket
                addToBasket={addToBasket}
                basket={basket}
                deleteFromBasket={deleteFromBasket}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
