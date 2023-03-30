import "./Card.css";

export function Card(props) {
  return (
    <div className="card">
      <span className="soldOut">sold out</span>
      <img
        src={`./images/${props.img}`}
        //src={katie}
        alt="female swimmer"
        className="card--image"
      />
      <div className="card--stats">
        <img src="./images/star.png" alt="star image" className="card--star" />

        <span className="rating">{props.rating}</span>
        <span className="gray">({props.reviewCount}) . </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="title">{props.title}</p>
      <p className="price">
        <span className="bold">From ${props.price}</span>/person
      </p>
    </div>
  );
}
