import React from "react";
import { LoadingScreen } from "./LoadingScreen/LoadingScreen";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <LoadingScreen />
    </div>
  );
};

export default App;
