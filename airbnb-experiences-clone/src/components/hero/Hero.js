import photoGrid from "../../images/photo-grid.PNG";
import "./Hero.css";

export function Hero() {
  return (
    <section>
      <img src={photoGrid} alt="a_grid_of_human_photos" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts--all
        without leaving home.
      </p>
    </section>
  );
}
