import MarketItem from "./MarketItems";
import "./Market.css";

const Market = ({ market, eraseOrAdd, subTotal, deliveryFees }) => {
  const finalTotal = subTotal + deliveryFees;

  return (
    <div className="market">
      {market.length > 0 && (
        <section className="button_market">
          <button className="buttonToBuy">Valider mon panier</button>
        </section>
      )}

      <div className="market-items-list">
        {market.map((dish, index) => (
          <MarketItem key={index} dish={dish} eraseOrAdd={eraseOrAdd} />
        ))}
      </div>

      {market.length > 0 ? (
        <div className="market-summary">
          <div className="summary-line">
            <p>Sous-total</p>
            <span>{subTotal.toFixed(2)} €</span>
          </div>
          <div className="summary-line">
            <p>Frais de livraison</p>
            <span>{deliveryFees.toFixed(2)} €</span>
          </div>
          <hr />
          <div className="total-line">
            <p className="total">Total</p>
            <span>{finalTotal.toFixed(2)} €</span>
          </div>
        </div>
      ) : (
        <p className="empty-market-message">Votre panier est vide.</p>
      )}
    </div>
  );
};

export default Market;
