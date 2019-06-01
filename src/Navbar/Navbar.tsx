import React from "react";
import { Navbar as NavbarBP, Button, Alignment, Classes } from "@blueprintjs/core";
import ElectricGuitarIcon from "../icons/electric-guitar.svg";
import { IconNames } from "@blueprintjs/icons";

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
          <Button className={Classes.MINIMAL} icon={IconNames.MUSIC} text="Practice" />
          <Button className={Classes.MINIMAL} icon={IconNames.HISTORY} text="Log" />
          <NavbarBP.Divider />
          <Button className={Classes.MINIMAL} icon={IconNames.USER} />
          <Button className={Classes.MINIMAL} icon={IconNames.NOTIFICATIONS} />
          <Button className={Classes.MINIMAL} icon={IconNames.COG} />
        </NavbarBP.Group>
      </NavbarBP>
    );
  }
}
