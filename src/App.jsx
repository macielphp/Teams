import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/";
import Form from "./components/Form/";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  const games = [
    {
      name: "Fortnite",
      firstColor: "#87EFFF",
      secondColor: "#669BBC",
    },
    {
      name: "Minecraft",
      firstColor: "#A6F2A6",
      secondColor: "#98A86E",
    },
    {
      name: "Valorant",
      firstColor: "#F9E3B0",
      secondColor: "#FF6666",
    },
    {
      name: "CS-GO",
      firstColor: "#A1FF3D",
      secondColor: "#33691E  ",
    },
    {
      name: "GTA V Online",
      firstColor: "#DEA3EB",
      secondColor: "#AB47BD",
    },
  ];

  const [players, setPlayers] = useState([]);

  const addedPlayer = (player) => {
    setPlayers([...players, player]);
  };
  return (
    <div className="App">
      <Banner />

      <Form
        gamesNames={games.map((game) => game.name)}
        newAddedPlayer={(player) => addedPlayer(player)}
      />

      {games.map((game) => (
        <Game
          key={game.name}
          name={game.name}
          firstColor={game.firstColor}
          secondColor={game.secondColor}
          players={players.filter((player) => player.game === game.name)}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
