import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import { originals, action, comedy, horror, romance, documentry } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action Movies" isSmall />
      <RowPost url={comedy} title="Comedy Movies" isSmall />
      <RowPost url={horror} title="Horror Movies" isSmall />
      <RowPost url={romance} title="Romance Movies" isSmall />
      <RowPost url={documentry} title="Documentry" isSmall />
    </div>
  );
}

export default App;
