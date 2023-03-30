import "./Joke.css";

export default function Joke(props) {
  return (
    <div className="joke-card">
      {props.setup && <h3>{props.setup}</h3>}
      <p>{props.punchline}</p>
      <p>
        <span style={{ color: "green" }}>upvotes:{props.upvotes}</span>{" "}
        <span style={{ color: "red" }}>downvotes:{props.downvotes}</span>
      </p>
      <hr />
      <h3>comments</h3>
    </div>
  );
}
