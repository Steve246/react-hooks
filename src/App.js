import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MoreEffect from "./components/MoreEffect";
import ThemeModifier from "./components/ThemeModifier";
import DummyView from "./components/DummyView";
import { HookComponent } from "./components/HookComponent";

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

  // return <MoreEffect />;

  // const [pageID, setPageId] = useState(0);
  // return pageID === 0 ? (
  //   <ThemeModifier onNavigate={() => setPageId(1)} />
  // ) : (
  //   <DummyView onNavigate={() => setPageId(0)} />
  // );

  <HookComponent />;
};

export default App;
