import React from 'react';
import "../setupTests";
import {App} from './App';
import { shallow } from "enzyme";

describe("App tests",()=>{
  it("renders without crashing", () => {
    const app = shallow(<App filteredCourses={[]} />);
  });
})
