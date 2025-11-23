import logoDeliveroo from "../../img/logo.png";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logoDeliveroo} alt="logo deliveroo" />
      </div>
    </header>
  );
};

export default Header;
