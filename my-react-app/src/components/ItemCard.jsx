
import "./Item-card.css";

function ItemCard(props) {
  return (
      <div className="fish-card">
          <img src={props.img} alt={props.title} className="fish-img"/>
          <h2 className="fish-title">{props.title}</h2>
          <p className="fish-info">{props.info}</p>
          <button className="buy-button">Buy a fish now!</button>
      </div>  
  );
}

export default ItemCard;