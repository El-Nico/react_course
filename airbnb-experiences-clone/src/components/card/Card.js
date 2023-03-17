import "./Card.css";
import katie from "../../images/katie-zaferes.png";
import star from "../../images/star.png";


export function Card() {
  return (
    <div className="card">
      <span className="soldOut">sold out</span>
      <img src={katie} alt="female swimmer" className="card--image"/>
      <div className="card--stats">
        <img src={star} alt="star image" className="card--star"/>
        
            <span className="rating">5.0</span>
            <span className="gray">(6) . </span>
            <span className="gray">USA</span>
        
      </div>
      <p className="title">Life lessons with Katie Zaferes</p>
      <p className="price"><span className="bold">From $136</span>/person</p>
    </div>
  );
}
