import React from "react";
import { Intent, Spinner } from "@blueprintjs/core";
import ElectricGuitarIcon from "../icons/electric-guitar.svg";
import "./LoadingScreen.css";

export const LoadingScreen: React.FC = () => {
    return (
      <div>
        <div className="totally-centered">
          <img
            src={ElectricGuitarIcon}
            alt="Electric guitar"
            width="200px"
            height="200px"
          />
          <Spinner className="mt-2" intent={Intent.PRIMARY} />
        </div>
        <div className="footer">
          Icons made by{" "}
          <a
            href="https://www.freepik.com/?__hstc=57440181.97988bf05b446addea5a1963e3c0972d.1556598355896.1556598355896.1557638995637.2&__hssc=57440181.5.1557638995637&__hsfp=2893031948"
            title="Freepik"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  };
  