import React from "react";
import { Navbar as NavbarBP, Button, Alignment } from "@blueprintjs/core";
import ElectricGuitarIcon from "../icons/electric-guitar.svg";

export class Navbar extends React.Component {
  render() {
    return (
      <NavbarBP>
        <NavbarBP.Group align={Alignment.LEFT}>
          <NavbarBP.Heading>
            <img
              src={ElectricGuitarIcon}
              alt="Electric guitar"
              width="40px"
              height="40px"
            />{" "}
            GuitarPal
          </NavbarBP.Heading>
        </NavbarBP.Group>
        <NavbarBP.Group align={Alignment.RIGHT}>
          <Button className="bp3-minimal" icon="music" text="Practice" />
          <Button className="bp3-minimal" icon="history" text="Log" />
          <NavbarBP.Divider />
          <Button className="bp3-minimal" icon="user" />
          <Button className="bp3-minimal" icon="notifications" />
          <Button className="bp3-minimal" icon="cog" />
        </NavbarBP.Group>
      </NavbarBP>
    );
  }
}
