import "./App.css";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div className="App">{jokeElements}</div>;
}

{
  /* <Joke
        setup="I got my daughter a fridge for her birthday"
        punchline="I cant wait to see her face light up when she opens it"
        upvotes={11}
        downvotes={1}
        isPun={true}
        comments={["cool", "haha"]}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
      <Joke punchline="It's hard to explain puns to kleptomaniacs because they always take things literally" /> */
}

export default App;
