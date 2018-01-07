import React from "react";
import "../setupTests";
import { Category } from "./Category";
import { Course } from "./Course";
import { shallow } from "enzyme";
import categories from "../data/categories.json";
import verticals from "../data/verticals.json";
const testCategory = {
  Id: 6,
  Name: "Music Fundamentals",
  Verticals: 3,
  State: "active"
};
const testCourse = {
  Id: 11,
  Name: "Become a guitar hero",
  Author: "Jimmy Page",
  Categories: 6,
  State: "active"
};

describe("Category tests", () => {
  let category;
  beforeAll(() => {
    category = shallow(<Category category={testCategory} />);
  });
  it("renders without crashing", () => {
    expect(category).toBeDefined();
  });
  it("Check the name", () => {
    expect(category.find("ListItem").prop("primaryText")).toBe(
      testCategory.Name
    );
  });
});
describe("Course tests", () => {
  let course;
  beforeAll(() => {
    course = shallow(<Course course={testCourse} />);
  });
  it("renders without crashing", () => {
    expect(course).toBeDefined();
  });
  it("Check the name", () => {
    expect(course.find("CardHeader").prop("title")).toBe(testCourse.Name);
  });
});
