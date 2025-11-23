import "./Restaurant.css"

const Restaurant = ({ restaurant }) => {
  return (
    <section className="Restaurant">
      <div className="restaurantDescription">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
      <img
        className="pictureRestaurant"
        src={restaurant.picture}
        alt={restaurant.name}
      />
    </section>
  );
};

export default Restaurant;
