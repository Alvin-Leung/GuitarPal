import { TimePicker } from "@blueprintjs/datetime";
import enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";
import { PracticeItemCard } from "./Cards/PracticeItemCard";
import { TotalTimeBuilder } from "../TotalTimeBuilder";
enzyme.configure({ adapter: new EnzymeAdapter() });

const inputClassName = ".bp3-timepicker-input";
const hourInputClassName = ".bp3-timepicker-hour";
const minuteInputClassName = ".bp3-timepicker-minute";

describe("PracticeItemCard component", () => {
  it("renders hour input element", () => {
    const component = enzyme.mount(<TimePicker />);
    const hourInput = component.find(inputClassName).find(hourInputClassName);
    expect(hourInput).toHaveLength(1);
  });

  it("renders minute input element", () => {
    const component = enzyme.mount(<TimePicker />);
    const minuteInput = component
      .find(inputClassName)
      .find(minuteInputClassName);
    expect(minuteInput).toHaveLength(1);
  });

  it("does not call onTimeChange when rendered", () => {
    const onTimeChange = jest.fn((newTime: Date) => newTime.getHours());
    const props = getPracticeItemCardProps(onTimeChange);
    enzyme.mount(<PracticeItemCard {...props} />);
    expect(onTimeChange).not.toBeCalled();
  });

  it("calls onTimeChange when hour input changes", () => {
    const expectedHours = 16;
    const onTimeChange = jest.fn((newTime: Date) => newTime.getHours());
    const props = getPracticeItemCardProps(onTimeChange);
    const component = enzyme.mount(<PracticeItemCard {...props} />);
    const hourInput = component.find(inputClassName).find(hourInputClassName);

    changeInputValue(hourInput, expectedHours);

    expect(onTimeChange).toBeCalled();
    expect(onTimeChange).toReturnWith(expectedHours);
  });

  it("calls onTimeChange when minute input changes", () => {
    const expectedMinutes = 57;
    const onTimeChange = jest.fn((newTime: Date) => newTime.getMinutes());
    const props = getPracticeItemCardProps(onTimeChange);
    const component = enzyme.mount(<PracticeItemCard {...props} />);
    const minuteInput = component
      .find(inputClassName)
      .find(minuteInputClassName);

    changeInputValue(minuteInput, expectedMinutes);

    expect(onTimeChange).toBeCalled();
    expect(onTimeChange).toReturnWith(expectedMinutes);
  });
});

describe("TimePicker", () => {
  it("renders hour input element", () => {
    const component = enzyme.mount(<TimePicker />);
    const hourInput = component.find(inputClassName).find(hourInputClassName);
    expect(hourInput).toHaveLength(1);
  });

  it("renders minute input element", () => {
    const component = enzyme.mount(<TimePicker />);
    const minuteInput = component
      .find(inputClassName)
      .find(minuteInputClassName);
    expect(minuteInput).toHaveLength(1);
  });

  it("does not call onChange when rendered", () => {
    const onChange = jest.fn();
    enzyme.mount(<TimePicker onChange={onChange} />);
    expect(onChange).not.toBeCalled();
  });

  it("calls onChange when hour input changes", () => {
    const expectedHours = 2;
    const onChange = jest.fn((newTime: Date) => newTime.getHours());
    const component = enzyme.mount(<TimePicker onChange={onChange} />);
    const hourInput = component.find(inputClassName).find(hourInputClassName);

    changeInputValue(hourInput, expectedHours);

    expect(onChange).toBeCalled();
    expect(onChange).toReturnWith(expectedHours);
  });

  it("calls onChange when minute input changes", () => {
    const expectedMinutes = 17;
    const onChange = jest.fn((newTime: Date) => newTime.getMinutes());
    const component = enzyme.mount(<TimePicker onChange={onChange} />);
    const minuteInput = component
      .find(inputClassName)
      .find(minuteInputClassName);

    changeInputValue(minuteInput, expectedMinutes);

    expect(onChange).toBeCalled();
    expect(onChange).toReturnWith(expectedMinutes);
  });
});

describe("TotalTimeBuilder", () => {
  it("adds minutes as expected", () => {
    const totalTimeBuilder = new TotalTimeBuilder();
    totalTimeBuilder.AddTime(new Date(0, 0, 0, 0, 5));
    totalTimeBuilder.AddTime(new Date(0, 0, 0, 0, 16));
    totalTimeBuilder.AddTime(new Date(0, 0, 0, 0, 25));

    expect(totalTimeBuilder.Build().minutes).toEqual(46);
  });

  it("adds minutes with overflow as expected", () => {
    const totalTimeBuilder = new TotalTimeBuilder();
    totalTimeBuilder.AddTime(new Date(0, 0, 0, 0, 5));
    totalTimeBuilder.AddTime(new Date(0, 0, 0, 0, 57));

    expect(totalTimeBuilder.Build().hours).toEqual(1);
    expect(totalTimeBuilder.Build().minutes).toEqual(2);
  });

  it("adds hours and minutes with overflow as expected", () => {
    const totalTimeBuilder = new TotalTimeBuilder();
    totalTimeBuilder.AddTime(new Date(0, 0, 0, 1, 36));
    totalTimeBuilder.AddTime(new Date(0, 0, 0, 1, 25));

    expect(totalTimeBuilder.Build().hours).toEqual(3);
    expect(totalTimeBuilder.Build().minutes).toEqual(1);
  });
})

function getPracticeItemCardProps(onTimeChange: jest.Mock<number, [Date]>) {
  return {
    ...PracticeItemCard.defaultProps,
    ...{ onTimeChange: onTimeChange }
  };
}

function changeInputValue(
  input: enzyme.ReactWrapper<
    enzyme.HTMLAttributes,
    any,
    React.Component<{}, {}, any>
  >,
  newValue: number
) {
  input.simulate("change", {
    target: { value: newValue.toString() }
  });
  input.simulate("blur");
}
