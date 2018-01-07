import React from 'react';
import "../setupTests";
import { NestedList } from "./NestedList";
import { shallow } from "enzyme";
import categories from "../data/categories.json";
import verticals from "../data/verticals.json";


describe("Nested List tests",()=>{
  let nestedList
  beforeAll(()=>{
    nestedList = shallow(<NestedList verticals={verticals} categories={categories} />);
  })
  it("renders without crashing", () => {
    expect(nestedList).toBeDefined();
  });
  it("Check the size of the list", () => {
    expect(nestedList.find(".list").children("Vertical").length).toBe(verticals.length);
  });
})
