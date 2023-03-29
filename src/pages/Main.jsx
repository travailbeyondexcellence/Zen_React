import { useEffect, useState } from "react";
import Card from "../components/Card";
import MessageForm from "../components/Form";

const cardsData = [
  {
    id: 1,
    title: "First title",
    description: "First description",
  },
  {
    id: 2,
    title: "Second title",
    description: "Second description",
  },
  {
    id: 3,
    title: "Third title",
    description: "Third description",
  },
  {
    id: 4,
    title: "Fourth title",
    description: "Fourth description",
  },
];

export default function MainPage() {
    const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false)
  const [joke, setJoke] = useState("")

  const message = "Welcome to Vite and React";
  const h1 = <h1>{message}</h1>;
  const link = "https://vitejs.dev";

  function changeIncrement(event) {
    setCount(count + 1);
  }

  async function getJokeReq() {
    setLoading(true)
    try {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
      const data = await res.json();
      console.log("Data", data)
      setJoke(data.joke)
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err)
    }
  }

  useEffect(() => {
    console.log("Use effect is running");
    getJokeReq()
  }, [])

  return (
    <div className="App">
      <div>
        {count && h1}
        {cardsData.map((card) => (
          <Card key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Card>
        ))}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <MessageForm />
        <h3>Dad Joke</h3>
        <h1>{loading ? "Loading..." : joke}</h1>
      </div>
    </div>
  );
}