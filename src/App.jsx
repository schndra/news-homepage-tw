import { useContext, useState } from "react";
import Home from "./components/Home";
import { useGlobalContext } from "./context";

function App() {
  const data = useGlobalContext();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
