import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { Wizard } from "./PracticeSession/Wizard";
import FakePracticeItemService from "./Services/FakePracticeItemService";
import { PracticeItemService, GoalItemService } from "./Services/Interfaces";
import { FakeGoalItemService } from "./Services/FakeGoalItemService";

const App: React.FC = () => {
  const goalItemService: GoalItemService = new FakeGoalItemService();
  const practiceItemService: PracticeItemService = new FakePracticeItemService();

  return (
    <Container fluid={true}>
      <Navbar />
      <Wizard goalItemService={goalItemService} practiceItemService={practiceItemService} />
    </Container>
  );
};

export default App;
