import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logoDeliveroo from "./img/logo.png";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-deliveroo--m2845slnhyvg.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

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
          <section className="Restaurant">
            <div className="restaurantDescription">
              <h1>{data.restaurant.name}</h1>
              <p>
                Profitez de chaque plaisir de la vie quotidienne. Le Pain
                Quotidien propose des ingrédients simples et sains, du bon pain,
                des fruits et des légumes frais et de saison issus de
                l’agriculture biologique.
              </p>
            </div>
            <img
              className="pictureRestaurant"
              src={data.restaurant.picture}
              alt=""
            />
          </section>
        </div>
        <div className="foodandmarket">
          
            <section className="menu-rolley">
              <div className="menu">
                {data.categories.map(
                  (category, index) =>
                    category.meals.length > 0 && (
                      <div key={index} className="category">
                        <h2>{category.name}</h2>

                        <div className="dishesof1Cat">
                          {category.meals.map((meal, index) => (
                            <section className="dish" key={index}>
                              <div>
                                <h4>{meal.title}</h4>
                                <p className="dish-description">
                                  {meal.description}
                                </p>
                                <p className="price">{meal.price} €</p>
                              </div>

                              {meal.picture && (
                                <img src={meal.picture} alt={meal.title} />
                              )}
                            </section>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            </section>
          
          <div className="market">
            <p>panier</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
