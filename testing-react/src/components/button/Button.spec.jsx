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
        let mockFn = jest.fn();
        beforeEach(() => {
            const props = {
                text: "Click Me",
                action: mockFn
            }
            wrapper = shallow(<Button {...props} />);
        })

        it ('Should render Button without fail', () => {
            const button = findByTestAttr(wrapper, 'main-btn');
            expect(button.length).toBe(1);
        })

        it('Should simulate button click event', () => {
            const button = findByTestAttr(wrapper, 'main-btn');
            button.simulate('click');
            const callback = mockFn.mock.calls.length;
            expect(callback).toBe(1);
        })

    })
})