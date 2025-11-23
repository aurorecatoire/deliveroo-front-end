import "./Dish.css";
import { FaStar } from "react-icons/fa";

const Dish = ({ meal, handleClick }) => {
  return (
    <section className="dish" onClick={() => handleClick(meal)}>
      <div className="dish_content">
        <div className="dish_text">
          <h4>{meal.title}</h4>
          <p className="dish-description">{meal.description}</p>
        </div>
        <div className="dish_footer">
          <p className="price">{meal.price} €</p>
          {meal.popular && (
            <span className="popular">
              <FaStar /> Popular
            </span>
          )}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt={meal.title} />}
    </section>
  );
};

export default Dish;
