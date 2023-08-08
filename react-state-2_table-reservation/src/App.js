import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={() => setCount(count + 1)} onSubtract={() => setCount(count - 1)} count={count} />
      <p>You are going to reserve a table for {count} {count===1 ? "person" : "people"}.</p>
    </div>
  );
}
