import enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { TotalTimeBuilder } from "./TotalTimeBuilder";
enzyme.configure({ adapter: new EnzymeAdapter() });

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
});