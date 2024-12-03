import { useState } from "react";
import PlayerData from "./PlayersData";
import "./App.css";
import PlayerList from "./components/PlayerList";

function App() {
  const [players, setPlayers] = useState(PlayerData);
  return (
    <>
      <section className="h-[100dvh] flex justify-center items-center">
        <PlayerList playersData={players} />
      </section>
    </>
  );
}

export default App;
