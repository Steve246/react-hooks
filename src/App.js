import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MoreEffect from "./components/MoreEffect";

const App = () => {
  const [dark, setDark] = useState(false);

  // const setOff = () => setDark(false);
  // const setOn = () => setDark(true);
  // return (
  //   <div style={{ backgroundColor: dark ? "black" : "white" }}>
  //     <p style={{ color: dark ? "white" : "black" }}>
  //       {" "}
  //       Color: {dark ? "black" : "white"}{" "}
  //     </p>
  //     <button onClick={() => setDark(!dark)}>
  //       set Theme {dark ? "white" : "black"}
  //     </button>
  //     {/* <button onClick={setOn}>set On {dark ? "white" : "black"}</button>

  //     <button onClick={setOff}>set Off {dark ? "white" : "black"}</button> */}
  //   </div>
  // );

  return <MoreEffect />;
};

export default App;
