import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { Wizard } from "./PracticeSession/Wizard";
import FakePracticeItemService from "./Services/FakePracticeItemService";
import { PracticeItemService } from "./Services/Interfaces";

const App: React.FC = () => {
  const practiceItemService: PracticeItemService = new FakePracticeItemService();

  return (
    <Container fluid={true}>
      <Navbar />
      <Wizard practiceItemService={practiceItemService} />
    </Container>
  );
};

export default App;
