import enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";
import { EditLink } from "./EditLink";
enzyme.configure({ adapter: new EnzymeAdapter() });

const iconClassName = ".bp3-icon";

describe("EditLink", () => {
  it("shows text injected through props", () => {
    const expectedTitle = "Test Title";
    const editLinkComponent = enzyme.shallow(<EditLink text={expectedTitle} />);
    const linkElement = editLinkComponent.find("a");

    expect(linkElement.text()).toContain(expectedTitle);
  });

  it("does not show icon on first render", () => {
    const editLinkComponent = enzyme.mount(<EditLink text={""} />);
    const iconElement = editLinkComponent.find(iconClassName);

    expect(iconElement.length).toEqual(0);
  });

  it("shows icon on mouse enter", () => {
    const editLinkComponent = enzyme.mount(<EditLink text={""} />);
    editLinkComponent.find("a").simulate("mouseenter");

    expect(editLinkComponent.find(iconClassName).length).toEqual(1);
  });

  it("hides icon on mouse leave after mouse enter", () => {
    const editLinkComponent = enzyme.mount(<EditLink text={""} />);
    const linkElement = editLinkComponent.find("a");
    linkElement.simulate("mouseenter");
    linkElement.simulate("mouseleave");

    expect(editLinkComponent.find(iconClassName).length).toEqual(0);
  });
});
