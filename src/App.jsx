import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logoDeliveroo from "./img/logo.png";
import Restaurant from "./components/Restaurant/Restaurant";
import Category from "./components/Category/Category";
import Market from "./components/Market/Market";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [market, setMarket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-aurore--pkglxxvkdlsq.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const UploadDish = (meal) => {
    const index = market.findIndex((dish) => dish.name === meal.title);

    if (index === -1) {
      setMarket([
        ...market,
        { name: meal.title, quantité: 1, prix: Number(meal.price) },
      ]);
    } else {
      const copy = [...market];
      const copydish = { ...copy[index] };
      copydish.quantité++;

      copy[index] = copydish;
      setMarket(copy);
    }
  };
  const subTotal = market.reduce((acc, dish) => {
    return acc + dish.quantité * dish.prix;
  }, 0);

  const eraseOrAdd = (dishToUpdate, sign) => {
    const index = market.findIndex((dish) => dish.name === dishToUpdate.name);
    if (index === -1) {
      return;
    }
    let updatedMarket = [...market];

    if (sign === "-") {
      if (updatedMarket[index].quantité > 1) {
        updatedMarket[index] = { ...updatedMarket[index] };
        updatedMarket[index].quantité--;
        setMarket(updatedMarket);
      } else if (updatedMarket[index].quantité === 1) {
        updatedMarket = updatedMarket.filter((_, i) => i !== index);
        setMarket(updatedMarket);
      }
    } else {
      updatedMarket[index] = { ...updatedMarket[index] };
      updatedMarket[index].quantité++;
      setMarket(updatedMarket);
    }
  };
  const deliveryFees = 2.5;
  const finalTotal = subTotal + deliveryFees;

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <header>
        <div className="container">
          <img src={logoDeliveroo} alt="logo deliveroo" />
        </div>
      </header>

      <main>
        <div className="containerofrestaurant">
          <Restaurant restaurant={data.restaurant} />
        </div>
        <div className="foodandmarket">
          <section className="menu-rolley">
            <div className="menu">
              {data.categories.map(
                (category, index) =>
                  category.meals.length > 0 && (
                    <Category
                      key={index}
                      category={category}
                      handleClick={UploadDish}
                    />
                  )
              )}
            </div>
          </section>
          <Market market={market} eraseOrAdd={eraseOrAdd} subTotal={subTotal} deliveryFees={deliveryFees} />
        </div>
      </main>
    </div>
  );
}

export default App;
