import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { CardColumn } from "./CardColumn/CardColumn";

const App: React.FC = () => {
  return (
    <Container fluid={true}>
      <Navbar />
      <CardColumn />
    </Container>
  );
};

export default App;
