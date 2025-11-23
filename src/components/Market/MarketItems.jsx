import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import "./MarketItems.css"

const MarketItem = ({ dish, eraseOrAdd }) => {
  const itemSubTotal = dish.prix * dish.quantité;

  return (
    <div className="market-item">
      <div className="item-controls">
        <FiMinusCircle onClick={() => eraseOrAdd(dish, "-")} />
        <span className="item-quantity">{dish.quantité}</span>
        <FiPlusCircle onClick={() => eraseOrAdd(dish, "+")} />
      </div>
      <span className="item-name">{dish.name}</span>
      <span className="item-price-total">{itemSubTotal.toFixed(2)} €</span>
    </div>
  );
};

export default MarketItem;
