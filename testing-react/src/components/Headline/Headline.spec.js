import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../utils";

import HeadLine from "./Headline";

const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

describe ("Headline Component", () => {

    describe("Check PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                title: "Testing prop types",
                description: "PropTypes test description",
                myArray: [
                  {
                    money: { cash: 2000 },
                    present: true,
                    level: 6,
                    name: "Name"
                  }
                ]
              }
            ;

            const propsErr = checkProps(HeadLine, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe("With Props", () => {
         let headLine;

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
         let headLine;

         beforeEach(() => {
           headLine = setUp();
         });
         
         it("Should not render", () => {
              const rendered = findByTestAttr(headLine, "HeadLine Component");
              expect(rendered.length).toBe(0);
         });
    });
})