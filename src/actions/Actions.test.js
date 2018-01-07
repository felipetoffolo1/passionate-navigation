import React from "react";
import * as Actions from "./Actions";
import { SET_CURRENT_CATEGORY } from "../constants/ActionTypes";


describe("Actions tests",()=>{
    it("Current Category returns the right data", () => {
        const actionReturn = Actions.setCurrentCategory({Id:1,Name:"Test Category"});
        expect(actionReturn.category.Name).toBe("Test Category");
        expect(actionReturn.type).toBe(SET_CURRENT_CATEGORY);
    })
    });
