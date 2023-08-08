import { D6Button } from "./components/D6Button";
// import { useState } from "react";
import { getD6Roll } from "../src/utils";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {defaultValue: []});

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };
  return (
    <div className="app">
      <main className="app__main">
        <D6Button rolls={rolls} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
