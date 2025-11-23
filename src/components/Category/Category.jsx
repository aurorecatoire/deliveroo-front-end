import Dish from "../Dish/Dish";
import "./Category.css";

const Category = ({ category, handleClick }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="dishesof1Cat">
        {category.meals.map((meal) => (
          <Dish key={meal.id} meal={meal} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Category;
