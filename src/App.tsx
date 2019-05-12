import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { Wizard } from "./PracticeSession/Wizard";

const App: React.FC = () => {
  return (
    <Container fluid={true}>
      <Navbar />
      <Wizard />
    </Container>
  );
};

export default App;
