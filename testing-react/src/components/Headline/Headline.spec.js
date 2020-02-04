import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../utils";

import HeadLine from "./Headline";

const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

describe ("Headline Component", () => {
    let headLine;

    describe("With Props", () => {
        beforeEach(() => {
            headLine = setUp({title: "My title", description: "My description"});
        });
        
        it('Should render without fail', () => {
             const rendered = findByTestAttr(headLine, "Headline Component");
             expect(rendered.length).toBe(1);
        })
       
        it('Should render the title', () => {
             const title = findByTestAttr(headLine, "Headline Title");
             expect(title.length).toBe(1);
        })
        
        it('Should render the description', () => {
             const description = findByTestAttr(headLine, "Headline Description");
             expect(description.length).toBe(1);
        })
    });

    describe("Without Props", () => {
         beforeEach(() => {
           headLine = setUp();
         });
         
         it("Should not render", () => {
              const rendered = findByTestAttr(headLine, "HeadLine Component");
              expect(rendered.length).toBe(0);
         });
    });
})