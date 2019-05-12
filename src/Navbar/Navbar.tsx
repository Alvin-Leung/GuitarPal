import React from "react";
import { Navbar as NavbarBP, Button, Alignment } from "@blueprintjs/core";

export class Navbar extends React.Component {
  render() {
    return (
      <NavbarBP>
        <NavbarBP.Group align={Alignment.LEFT}>
          <NavbarBP.Heading>GuitarPal</NavbarBP.Heading>
          <NavbarBP.Divider />
          <Button className="bp3-minimal" icon="music" text="Practice" />
          <Button className="bp3-minimal" icon="history" text="Log" />
        </NavbarBP.Group>
      </NavbarBP>
    );
  }
}
