import React from 'react';
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../utils";
import Button from './Button';

describe("Button Component", () => {
    describe('Check Prop Types', () => {
        it('should not throw warning', () => {
        const expectedProps = {
            text: "Click Me",
            action: () => {}
        }

        const propsErr = checkProps(Button, expectedProps);
        expect(propsErr).toBeUndefined();
        })
    })

    describe('Render Button', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                text: "Click Me",
                action: () => { }
            }
            wrapper = shallow(<Button {...props} />);
        })

        it ('Should render Button without fail', () => {
            const button = findByTestAttr(wrapper, 'main-btn');
            expect(button.length).toBe(1);
        })

    })
})