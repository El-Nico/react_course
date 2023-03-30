import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Card } from "./components/card/Card";
import data from "./data";

function App() {
  const experienceElements = data.map((experience) => {
    return (
      <Card
        key={experience.id}
        img={experience.coverImg}
        rating={experience.stats.rating}
        reviewCount={experience.stats.reviewCount}
        location={experience.location}
        title={experience.title}
        price={experience.price}
      />
    );
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Hero></Hero> */}
      <section className="cards-list">{experienceElements}</section>
    </div>
  );
}

export default App;
