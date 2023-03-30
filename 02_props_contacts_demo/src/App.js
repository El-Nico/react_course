import "./App.css";
import { Contacts } from "./components/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Contacts
        img="https://source.unsplash.com/random/?cat"
        name="Mr. Whiskerson"
        phone="(212) 555 1234"
        email="mr.whiskaz@catnap.meow"
      />

      <Contacts
        img="https://source.unsplash.com/random/?cat,brown"
        name="Fluffykins"
        phone="(212) 555 2345"
        email="fluff@me.com"
      />
      <Contacts
        img="https://source.unsplash.com/random/?cat,orange"
        name="Felix"
        phone="(212) 555 4567"
        email="thecat@hotmail.com"
      />
      <Contacts
        img="https://source.unsplash.com/random/?cat,black"
        name="Pumpkins"
        phone="(212) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
